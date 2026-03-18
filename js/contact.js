// 联系我们页面 - 地图初始化（使用 Leaflet + OpenStreetMap）
document.addEventListener('DOMContentLoaded', function() {
    // 青岛科技大学崂山校区坐标（松岭路99号）
    const qustLat = 36.122538;
    const qustLng = 120.479100;

    // 初始化地图
    const map = L.map('map', {
        center: [qustLat, qustLng],
        zoom: 16,
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true
    });

    // 添加腾讯地图瓦片图层（免费，国内访问快）
    L.tileLayer('https://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&style=0', {
        attribution: '地图数据 &copy; 腾讯地图',
        maxZoom: 19,
        minZoom: 3,
        subdomains: '0123'
    }).addTo(map);

    // 创建自定义图标
    const customIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // 添加标记点
    const marker = L.marker([qustLat, qustLng], { icon: customIcon }).addTo(map);

    // 添加弹出信息
    const popupContent = `
        <div style="padding: 10px; min-width: 220px;">
            <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #333; font-weight: 600;">青岛科技大学</h3>
            <p style="margin: 5px 0; font-size: 14px; color: #4a90e2;">
                <strong>机电工程学院</strong>
            </p>
            <p style="margin: 5px 0; font-size: 13px; color: #666;">
                📍 山东省青岛市崂山区松岭路99号
            </p>
            <p style="margin: 5px 0; font-size: 13px; color: #666;">
                📮 邮编：266061
            </p>
        </div>
    `;

    marker.bindPopup(popupContent).openPopup();

    // 自适应地图大小
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
});

