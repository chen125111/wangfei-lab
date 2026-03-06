// 科研成果页面 - 动态加载论文数据

// 标签切换功能
function switchTab(tabName) {
    // 隐藏所有标签内容
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // 移除所有按钮的active状态
    const allButtons = document.querySelectorAll('.tab-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // 显示选中的标签内容
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // 激活对应的按钮
    event.target.closest('.tab-btn').classList.add('active');
}

// 论文数据（直接嵌入，避免CORS问题）
const publicationsData = {
  "publications": [
    {"id": 1, "year": 2025, "title": "ML-guided prediction of hydrogen hydrate formation: Guiding experiment design and mechanistic insight", "authors": "Shihao Zhao, Peng Zhang, Guodong Zhang*, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2025, 522, 167230", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2025.167230"},
    {"id": 2, "year": 2025, "title": "Multipoint Interfacial Disturbance Driven by Electromagnetic Field for Promoting Methane Hydrate Formation", "authors": "Xiaoming Wang, Zhenxing Hou, Xu Wang, Xinyan Tian, Qing Gao, Chen Chen*, Fei Wang*", "journal": "Langmuir", "volume": "2025", "if": "3.9", "zone": "2区", "doi": "10.1021/acs.langmuir.5c01739"},
    {"id": 3, "year": 2025, "title": "Sodium p‑styrene sulfonate as a Remarkable Kinetic Promoter for CO2 Hydrate Formation: Promotion Efficiency and Mechanism", "authors": "Jingyu Lv, Kang Tan, Fei Wang*, Chuanyu Dang, Mengting Sun*", "journal": "Energy & Fuels", "volume": "2025", "if": "5.3", "zone": "其他", "doi": "10.1021/acs.energyfuels.5c02358"},
    {"id": 4, "year": 2025, "title": "Separation of Gas Mixture of H2 and CO2 by Nanopromoter Enhanced Gas Hydrate Formation", "authors": "Yongtao Zhang, Zaizheng Jiang, Zhihe Xin, Qingqi Dong, Fei Wang*", "journal": "Langmuir", "volume": "2025", "if": "3.9", "zone": "2区", "doi": "10.1021/acs.langmuir.5c02696"},
    {"id": 5, "year": 2025, "title": "Adsorption-Driven Preferential Crystallization and Growth Direction Switching of Methane Hydrates within Confined Porespaces", "authors": "Peng Zhang, Guodong Zhang*, Daiming Liu, Abdolreza Farhadian*, Alimorad Rashidi, Fei Wang*", "journal": "Crystal Growth & Design", "volume": "2025, 25, 5672-5678", "if": "3.4", "zone": "1区", "doi": "10.1021/acs.cgd"},
    {"id": 6, "year": 2025, "title": "Purification of low concentration coalbed methane via hydrate formation enhanced by carbon-based nanopromoters", "authors": "Yongtao Zhang, Zaizheng Jiang, Zhiliang Tu, Zhihe Xin, Fei Wang*", "journal": "Fuel", "volume": "2026, 403, 136075", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2026.136075"},
    {"id": 7, "year": 2025, "title": "Rapid and continuous generation of methane hydrates under low pressure promotes the efficient capture of associated petroleum gas (APG)", "authors": "Fei Wang, Yifan Xu, Peng Zhang, Daiming Liu, Guodong Zhang*", "journal": "Energy", "volume": "2025, 332, 137197", "if": "9.4", "zone": "1区", "doi": "10.1016/j.energy.2025.137197"},
    {"id": 8, "year": 2025, "title": "Continuous and efficient production of CH4/THF/DIOX composite hydrates for energy dense storage under moderate conditions", "authors": "Yifan Xu, Peng Zhang, Xin Xiang, Rongtong Qin, Daiming Liu, Guodong Zhang*, Fei Wang*", "journal": "Journal of Environmental Chemical Engineering", "volume": "2025, 13, 117225", "if": "7.2", "zone": "2区", "doi": "10.1016/j.jece.2025.117225"},
    {"id": 9, "year": 2025, "title": "Efficient formation of methane hydrate in the sulfonated polyimide foam with balanced surface wettability", "authors": "Zhibing Xuan, Xinran Sun, Xiaowang Zhang, Guodong Zhang, Fei Wang*, Daiming Liu*", "journal": "Chemical Engineering Journal", "volume": "2025, 515, 163958", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2025.163958"},
    {"id": 10, "year": 2025, "title": "Management of formation kinetics and energy storage capacity of methane hydrates via Ag-modified graphene aerogel", "authors": "Wenhui Ma, Li Li, Yan Lin*, Fei Wang*", "journal": "Energy & Fuels", "volume": "2025", "if": "5.3", "zone": "其他", "doi": "10.1021/acs.energyfuels.5c00762"},
    {"id": 11, "year": 2025, "title": "Research progress on bio-additives in hydrate-based energy technologies: Application scenarios, classification, functions and mechanisms", "authors": "Kang Tan, Fei Wang*, Mengting Sun*", "journal": "Applied Energy", "volume": "2025, 394, 126164", "if": "11", "zone": "1区", "doi": "10.1016/j.apenergy.2025.126164"},
    {"id": 12, "year": 2025, "title": "Recovery of Methane from Low-Concentration Coalbed Methane via Hydrate Formation Enhanced by -SO3- Coated Nanopolymers", "authors": "Zaizheng Jiang, Zhiliang Tu, Zhihe Xin, Guodong Zhang, Fei Wang*, Yongtao Zhang*", "journal": "Langmuir", "volume": "2025, 41, 12597-12606", "if": "3.9", "zone": "2区", "doi": "10.1021/acs.langmuir"},
    {"id": 13, "year": 2025, "title": "Sodium p-styrenesulfonate serving as an effective and non-foaming promoter for methane hydrate formation", "authors": "Fangzheng Hua, Kang Tan, Jingyu Lv, Fei Wang*, Mengting Sun*", "journal": "Journal of Environmental Chemical Engineering", "volume": "2025, 13, 116931", "if": "7.2", "zone": "2区", "doi": "10.1016/j.jece.2025.116931"},
    {"id": 14, "year": 2025, "title": "Re-evaluation of using carbon nanotubes as the kinetic promoters for methane hydrate formation", "authors": "Xiaoming Wang, Zehua Huang, Mengge Li, Hongzheng Lu, Mengting Sun*, Yuanmei Song*, Xiaolin Wang, Huifang Li, Yan He, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2025, 513, 162937", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2025.162937"},
    {"id": 15, "year": 2025, "title": "Hydrate-based separation of nitrous oxide: Mechanisms, phase equilibria, and kinetic insights for enhanced greenhouse gas mitigation", "authors": "Zhao Liang, Ying Teng, Chen Chen, Yiqi Chen, Bin Wang, Fei Wang*, Senyou An, Pengfei Wang*, Yun Li, Yuze Wang, Jinlong Zhu, Songbai Han", "journal": "Separation and Purification Technology", "volume": "2025, 366, 132785", "if": "9", "zone": "2区", "doi": "10.1016/j.seppur.2025.132785"},
    {"id": 16, "year": 2025, "title": "High-performance piezocatalytic hydrogen evolution over bismuth oxyhalides with halogen-dependent piezoelectricity and surface activity", "authors": "Hao-Ran Li, Yu-Ming Chen, Cheng-Chao Jin, Ai-Ze Hao, Shania Rehmand, Bing-Bing Chen, Fei Wang*, Dai-Ming Liu*", "journal": "Rare Metals", "volume": "2025", "if": "11", "zone": "1区", "doi": "10.1007/s12598-025-03297-9"},
    {"id": 17, "year": 2025, "title": "Experimental verification and 4E analysis of a hydrate-based CO2 capture system for fuel gas decarbonization", "authors": "Xiaoming Wang, Shangjie Shao, Guangyong Yang, Qixian Yan, Haoyu Yuan, Chen Chen*, Fei Wang*", "journal": "Carbon Neutrality", "volume": "2025, 4, 11", "if": "12.5", "zone": "其他", "doi": "10.1007/s43979-025-00011"},
    {"id": 18, "year": 2025, "title": "Green chemistry advancement in methane storage: A biodegradable surfactant for improved gas hydrate formation and sustainability", "authors": "Abdolreza Farhadiana*, Anh Phan, Zahra Taheri Rizi*, Alireza Shaabani, Elaheh Sadeh, Mahboobeh Mohammad-Taheri, Mohammad Ali Aminolroayaei, Abolfazl Mohammadi, Nastaran Sayyari, Fei Wang*", "journal": "Green Chemistry", "volume": "2025, 27, 4523-4539", "if": "9.2", "zone": "1区", "doi": "10.1039/d5gc"},
    {"id": 19, "year": 2025, "title": "Insights into the Storage of Adsorption-Hydration Natural Gas in Preadsorbed Water Nanoporous Materials", "authors": "Fei Wang, Mengqi Liu, Peng Zhang, Yifan Xu, Daiming Liu, Guodong Zhang", "journal": "Langmuir", "volume": "2025, 41, 5581-5590", "if": "3.9", "zone": "2区", "doi": "10.1021/acs.langmuir"},
    {"id": 20, "year": 2025, "title": "Robust Coupling Between Piezoelectric Field and Interfacial Polarization in Layered Bismuth-Based Heterostructure for High-performance Piezocatalytic Water Splitting", "authors": "Daiming Liu, Lining Tan, Haoran Li, Zhibing Xuan, Chengchao Jin*, Bingbing Chen, Fei Wang*", "journal": "Small", "volume": "2025, 2500268", "if": "12.1", "zone": "2区", "doi": "10.1002/smll.202500268"},
    {"id": 21, "year": 2025, "title": "Review on flow assurance issues in natural gas pipeline transmission systems and solutions to hydrate deposition", "authors": "Zhihe Xin, Zaizheng Jiang, Fei Wang*, Yongtao Zhang*", "journal": "Chemical Engineering Science", "volume": "2025, 306, 121290", "if": "4.3", "zone": "2区", "doi": "10.1016/j.ces.2025.121290"},
    {"id": 22, "year": 2025, "title": "CTAB serves as the best kinetic promoters of H2/DIOX mixed hydrates for moderate solidified hydrogen storage via clathrates", "authors": "Honglin Yu, Peng Zhang, Mengqi Liu, Daiming Liu, Guodong Zhang*, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2025, 506, 159818", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2025.159818"},
    {"id": 23, "year": 2025, "title": "Recent advances in high-efficiency formation of gas hydrates within fixed beds: classification, mechanism, applications and challenges", "authors": "Zhibing Xuan, Daiming Liu*, Xinran Sun, Yuming Chen, Haoran Li, Yongtao Zhang, Guodong Zhang, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2025, 505, 159611", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2025.159611"},
    {"id": 24, "year": 2025, "title": "High-performance hydrogenation of N-propylcarbazole over Ru-Ni alloy catalyst by efficient overall hydrogenation transition", "authors": "Yuming Chen#, Fei Wang#, Haoran Li, Daiming Liu*", "journal": "Journal of Alloys and Compounds", "volume": "2025, 1013, 178619", "if": "6.3", "zone": "2区", "doi": "10.1016/j.jallcom.2025.178619"},
    {"id": 25, "year": 2025, "title": "Hydrate-Based Methane Storage in Biodegradable Hydrogels Absorbing Dilute Sodium P-Styrenesulfonate Solution", "authors": "Fangzheng Hua, Kang Tan, Jingyu Lv, Fei Wang*, Mengting Sun*", "journal": "Gels", "volume": "2025, 11, 1", "if": "5.2", "zone": "2区", "doi": "10.3390/gels11010001"},
    {"id": 26, "year": 2025, "title": "Methane hydrate formation promoted by eco-friendly hydrogels carrying with trace SDS", "authors": "Chang Li, Kang Tan, Fangzheng Hua, Changxue Wang, Xiaolin Wang, Fei Wang*, Mengting Sun*", "journal": "Fuel", "volume": "2025, 380, 133107", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2025.133107"},
    {"id": 27, "year": 2024, "title": "Methane dense storage in ZIF-8@cu under low pressure via adsorption-absorption synergy", "authors": "Mengqi Liu, Honglin Yu, Daiming Liu, Guodong Zhang*, Fei Wang*", "journal": "Journal of Energy Storage", "volume": "2024, 103, 114400", "if": "9.8", "zone": "2区", "doi": "10.1016/j.est.2024.114400"},
    {"id": 28, "year": 2024, "title": "Methane Hydrates Formed in a Porous Graphene Aerogel for Energy Storage", "authors": "Xiaoming Wang, Li Li, Yan Lin, Jin Xu, Jiatao Zhao, Xiaoguang Zhang*, Fei Wang*, Xiaolin Wang", "journal": "Crystal Growth & Design", "volume": "2024, 24, 9223-9234", "if": "3.4", "zone": "1区", "doi": "10.1021/acs.cgd"},
    {"id": 29, "year": 2024, "title": "Water-based Silicalite-1 porous liquid facilitates adsorption and absorption for CH4 capture", "authors": "Honglin Yu, Mengqi Liu, Guodong Zhang*, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2024, 499, 156453", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2024.156453"},
    {"id": 30, "year": 2024, "title": "Opening the Pandora box of hydrate-based adsorption-hydration natural gas technology in industrial application", "authors": "Mengqi Liu, Honglin Yu, Zhe Liu, Daiming Liu, Guodong Zhang*, Fei Wang*", "journal": "Fuel", "volume": "2024, 376, 1332676", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2024.1332676"},
    {"id": 31, "year": 2024, "title": "High-performance static formation of methane hydrate in fixed bed constructed by incorporating expanded graphite into polyimide foam", "authors": "Xinran Sun, Daiming Liu*, Zhibing Xuan, Yongtao Zhang, Guodong Zhang, Chen Chen, Mengting Sun, Yan Lin, Jie Zhong, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2024, 493, 152777", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2024.152777"},
    {"id": 32, "year": 2024, "title": "Kinetic Promotional Effect of Methane Hydrate Formation in the Presence of Leucine", "authors": "Honggang Yu, Chen Chen*, Fei Wang*", "journal": "Energy & Fuels", "volume": "2024, 38, 8641-8648", "if": "5.3", "zone": "其他", "doi": "10.1021/acs.energyfuels"},
    {"id": 33, "year": 2024, "title": "Branched sulfonated promoter: Achieving high methane uptake and foam-free gas recovery for solidified gas storage", "authors": "Elaheh Sadeh, Abdolreza Farhadian*, Mina Maddah, Matvei E. Semenov, Abolfazl Mohammadi, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2024, 487, 150674", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2024.150674"},
    {"id": 34, "year": 2024, "title": "Ultra-rapid formation of mixed H2/DIOX/THF hydrate under low driving force: Important insight for hydrate-based hydrogen storage", "authors": "Yaning Kong, Honglin Yu, Mengqi Liu, Guodong Zhang*, Fei Wang*", "journal": "Applied Energy", "volume": "2024, 362, 123029", "if": "11", "zone": "1区", "doi": "10.1016/j.apenergy.2024.123029"},
    {"id": 35, "year": 2024, "title": "High-efficiency preparation of carbon nanotube catalysts via mono/bi-microemulsion nanoreactor", "authors": "Xinqiao Tang, Jiatao Zhao, Yan He*, Fei Wang*", "journal": "Colloids and Surfaces A", "volume": "2024, 687, 133503", "if": "5.4", "zone": "2区", "doi": "10.1016/j.colsurfa.2024.133503"},
    {"id": 36, "year": 2024, "title": "Eco-friendly hydrogels serving as water carriers for improving methane hydrate formation and dissociation processes", "authors": "Chang Li, Kang Tan, Fangzheng Hua, Changxue Wang, Mengting Sun*, Fei Wang*, Xiaolin Wang", "journal": "Fuel", "volume": "2024, 362, 130854", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2024.130854"},
    {"id": 37, "year": 2024, "title": "Methane hydrate formation enhanced by thermally expanded graphite with multi-sized pores", "authors": "Xinran Sun, Daiming Liu*, Yongtao Zhang, Guodong Zhang, Fei Wang*, Xiaolin Wang", "journal": "Chemical Engineering Journal", "volume": "2024, 474, 148280", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2024.148280"},
    {"id": 38, "year": 2024, "title": "Review on separation of coalbed methane by hydrate method", "authors": "Zhiliang Tu, Li Li, Fei Wang*, Yongtao Zhang*", "journal": "Fuel", "volume": "2024, 358, 130224", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2024.130224"},
    {"id": 39, "year": 2023, "title": "Inhibition on methane hydrate formation by polyacrylate superabsorbent hydrogel", "authors": "Dong Chen, Xiaoming Wang, Jiayi Zhang, Yan He, Yan Lin*, Fei Wang*", "journal": "Energy", "volume": "2023, 284, 129303", "if": "9.4", "zone": "1区", "doi": "10.1016/j.energy.2023.129303"},
    {"id": 40, "year": 2023, "title": "Aurivillius-layered Bi2WO6 nanoplates with CoOx cocatalyst as high-performance piezocatalyst for hydrogen evolution", "authors": "Lining Tan, Xinran Sun, Jintao Zhang, Chengchao Jin, Fei Wang*, Daiming Liu*", "journal": "Dalton Transactions", "volume": "2023, 52, 14210", "if": "3.3", "zone": "2区", "doi": "10.1039/d3dt"},
    {"id": 41, "year": 2023, "title": "Enhanced formation kinetics of mixed H2/THF hydrate in the presence of nano promoters", "authors": "Yaning Kong, Fei Wang*, Guodong Zhang*, Xiaolin Wang", "journal": "Chemical Engineering Journal", "volume": "2023, 474, 145901", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2023.145901"},
    {"id": 42, "year": 2023, "title": "The first trial of hydrate continuous production: Paving way on hydrate-based carbon capture and storage", "authors": "Guodong Zhang, Penghui Song, Yaning Kong, Fei Wang*", "journal": "Energy", "volume": "2023, 282, 128917", "if": "9.4", "zone": "1区", "doi": "10.1016/j.energy.2023.128917"},
    {"id": 43, "year": 2023, "title": "Hydrate-based adsorption-hydration hybrid approach enhances methane storage in wet MIL-101(Cr)@AC under mild condition", "authors": "Guodong Zhang, Zhe Liu, Yaning Kong, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2023, 472, 145068", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2023.145068"},
    {"id": 44, "year": 2023, "title": "Complicated hydrate formation kinetics induced by ion specific effect in porous surface", "authors": "Guodong Zhang, Runcheng Zhang, Yaning Kong, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2023, 467, 143471", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2023.143471"},
    {"id": 45, "year": 2023, "title": "Enhanced piezocatalytic hydrogen evolution performance of bismuth vanadate by the synergistic effect of facet engineering and cocatalyst engineering", "authors": "Daiming Liu, Jintao Zhang, Lining Tan, Chengchao Jin*, Ming Li, Bingbing Chen, Guodong Zhang, Yongtao Zhang, Fei Wang*", "journal": "Journal of Colloid and Interface Science", "volume": "2023, 646, 159-166", "if": "9.7", "zone": "1区", "doi": "10.1016/j.jcis.2023"},
    {"id": 46, "year": 2023, "title": "Carbon nanotubes-based porous media constructed via 3D printing for methane hydrate formation", "authors": "Chen Chen, Fengze Ma, Xiaoming Wang, Li Li, Ying Miao, Yang Bai*, Yan He, Fei Wang*", "journal": "Fuel", "volume": "2023, 349, 128645", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2023.128645"},
    {"id": 47, "year": 2023, "title": "SDS-promoted methane hydrate growth in presence of a superhydrophobic substrate", "authors": "Xiaolai Zhang, Jiatao Zhao, Chen Chen, Haoyu Yuan, Yonghao Zhang, Yan He, Fei Wang*", "journal": "Chemical Engineering Science", "volume": "2023, 276, 118761", "if": "4.3", "zone": "2区", "doi": "10.1016/j.ces.2023.118761"},
    {"id": 48, "year": 2023, "title": "Magnetically separable 0D-2D Fe3O4-GO nanocomposite with high thermal diffusivity for methane hydrate formation", "authors": "Chen Chen, Haoyu Yuan, Xiaoming Wang, Na Wang, Yan He, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2023, 465, 142832", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2023.142832"},
    {"id": 49, "year": 2023, "title": "Microemulsion nanoreactor applied for the synthesis of iron-based catalysts for carbon nanotube formation", "authors": "Xinru Liu, Xinqiao Tang, Yan He*, Fei Wang*", "journal": "Colloids and Surfaces A", "volume": "2023, 666, 131325", "if": "5.4", "zone": "2区", "doi": "10.1016/j.colsurfa.2023.131325"},
    {"id": 50, "year": 2023, "title": "High-performance piezocatalytic hydrogen evolution by (Bi0.5Na0.5)TiO3 cubes decorated with cocatalysts", "authors": "Daiming Liu, Xinran Sun, Lining Tan, Jintao Zhang, Chengchao Jin, Fei Wang*", "journal": "Ceramics International", "volume": "2023, 49, 20343-20350", "if": "5.6", "zone": "2区", "doi": "10.1016/j.ceramint.2023"},
    {"id": 51, "year": 2023, "title": "Hydrate-based adsorption-hydration hybrid approach enhances methane storage density in ZIF-8@AC", "authors": "Guodong Zhang, Zhe Liu, Daiming Liu, Yan Lin*, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2023, 455, 140503", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2023.140503"},
    {"id": 52, "year": 2023, "title": "Magnetic nanopromoter enables excellent kinetic promotion and cycling performance in methane hydrate formation", "authors": "Chen Chen, Haoyu Yuan, Xiaoming Wang, Na Wang, Yan Lin, Yan He, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2023, 452, 139318", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2023.139318"},
    {"id": 53, "year": 2023, "title": "温和条件下甲烷水合物强化生成技术", "authors": "刘哲, 石晓云, 何燕, 张国栋*, 王飞*", "journal": "科学通报", "volume": "2023, 68: 424-432", "if": "1.2", "zone": "1区", "doi": ""},
    {"id": 54, "year": 2023, "title": "气体水合物高效生成、分离与储存一体化技术研究", "authors": "宋彭辉，张国栋，王飞", "journal": "化工学报", "volume": "2023, 74: 4670-4678", "if": "", "zone": "其他", "doi": ""},
    {"id": 55, "year": 2022, "title": "Enhanced CO2 hydrate formation via biopromoter coupled with initial stirring activation", "authors": "Yongtao Zhang, Fulin Chen, Yan He, Fei Wang*", "journal": "Fuel", "volume": "2022, 330, 125713", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2022.125713"},
    {"id": 56, "year": 2022, "title": "The synergy of spiral agitation and nano-promoters significantly enhances hydrate formation under mild conditions", "authors": "Guodong Zhang, Xiaoyun Shi, Zhe Liu, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2022, 450, 138354", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2022.138354"},
    {"id": 57, "year": 2022, "title": "Ultra-dispersive sulfonated graphene as water-based lubricant additives for enhancing tribological performance", "authors": "Lupeng Wu, Yi Zhong, Haoyu Yuan, Hui Liang, Fei Wang*, Le Gu*", "journal": "Tribology International", "volume": "2022, 174, 107759", "if": "6.9", "zone": "1区", "doi": "10.1016/j.triboint.2022.107759"},
    {"id": 58, "year": 2022, "title": "Unveiling the effect of crystal facets on piezo-photocatalytic activity of BiVO4", "authors": "Fei Wang#, Jintao Zhang#, Chengchao Jin, Xucheng Ke, Fei Fei Wang, Daiming Liu", "journal": "Nano Energy", "volume": "2022, 101, 107573", "if": "17.1", "zone": "1区", "doi": "10.1016/j.nanoen.2022.107573"},
    {"id": 59, "year": 2022, "title": "A novel conceptual design of LNG-sourced natural gas peak-shaving with gas hydrates as the medium", "authors": "Chen Chen, Haoyu Yuan, Rongshan Bi, Na Wang, Yujiao Li, Yan He*, Fei Wang*", "journal": "Energy", "volume": "2022, 253, 124169", "if": "9.4", "zone": "1区", "doi": "10.1016/j.energy.2022.124169"},
    {"id": 60, "year": 2022, "title": "Promoted methane hydrate formation in -SO3--rich hydrogel clathrate", "authors": "Fei Wang, Fu-Peng Song, Chang Li, Meng-Ting Sun*", "journal": "Fuel", "volume": "2022, 323, 124398", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2022.124398"},
    {"id": 61, "year": 2022, "title": "Recyclable and high-efficiency methane hydrate formation promoter based on SDS-coated superparamagnetic nano-Fe3O4", "authors": "Chen Chen, Haoyu Yuan, Xiaoming Wang, Yan Lin, Yan He, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2022, 437, 135365", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2022.135365"},
    {"id": 62, "year": 2022, "title": "Preparation of hydrogel-based promoter for methane hydrate formation: Effects of -SO3- density on promotion efficiency", "authors": "Fei Wang, Fu-Peng Song, Chang Li, Meng-Ting Sun*", "journal": "Energy & Fuels", "volume": "2022, 36, 2731-2738", "if": "5.3", "zone": "其他", "doi": "10.1021/acs.energyfuels"},
    {"id": 63, "year": 2022, "title": "Insight into oxygen-vacancy regulation on piezocatalytic activity of (Bi1/2Na1/2)TiO3 crystallites: Experiments and first-principles calculations", "authors": "Dai-Ming Liu, Jin-Tao Zhang, Cheng-Chao Jin*, Bing-Bing Chen, Jing Hu, Ren Zhu, Fei Wang*", "journal": "Nano Energy", "volume": "2022, 95, 106975", "if": "17.1", "zone": "1区", "doi": "10.1016/j.nanoen.2022.106975"},
    {"id": 64, "year": 2022, "title": "Enhanced hydrate formation under mild conditions using a novel spiral-agitated reactor", "authors": "Guodong Zhang, Xiaoyun Shi, Fei Wang*", "journal": "AIChE Journal", "volume": "2022, 68, e17617", "if": "4", "zone": "其他", "doi": "10.1002/aic.17617"},
    {"id": 65, "year": 2022, "title": "Methane Hydrate Production Using a Novel Spiral-agitated Reactor: Promotion of Hydrate Formation Kinetics", "authors": "Guodong Zhang, Xiaoyun Shi, Fei Wang*", "journal": "AIChE Journal", "volume": "2022, 68, e17423", "if": "4", "zone": "其他", "doi": "10.1002/aic.17423"},
    {"id": 66, "year": 2021, "title": "Hydrate formation loaded by activated carbon bed in 3D printed containers", "authors": "Runcheng Zhang, Guodong Zhang*, Fei Wang*", "journal": "Energy & Fuels", "volume": "2021, 35, 15675-15683", "if": "5.3", "zone": "其他", "doi": "10.1021/acs.energyfuels"},
    {"id": 67, "year": 2021, "title": "Carbon nanotube-based nanopromoters for gas hydrate formation", "authors": "Yang Bai, Hongzheng Lu, Fengze Ma, Yan He*, Fei Wang*", "journal": "Journal of Natural Gas Science and Engineering", "volume": "2021, 94, 104109", "if": "5.3", "zone": "2区", "doi": "10.1016/j.jngse.2021.104109"},
    {"id": 68, "year": 2021, "title": "Editorial: Recent Advances in Promoters for Gas Hydrate Formation", "authors": "Fei Wang*, Amadeu K. Sum, Bei Liu", "journal": "Frontiers in Chemistry", "volume": "2021, 9, 708269", "if": "4.2", "zone": "其他", "doi": "10.3389/fchem.2021.708269"},
    {"id": 69, "year": 2021, "title": "Fast formation kinetics of methane hydrates loaded by silver nanoparticle coated activated carbon (Ag-NP@AC)", "authors": "Guodong Zhang, Runcheng Zhang, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2021, 417, 129206", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2021.129206"},
    {"id": 70, "year": 2021, "title": "Integrated piezo-photocatalysis of electrospun Bi4Ti3O12 nanostructures by bi-harvesting visible light and ultrasonic energies", "authors": "Daiming Liu, Chengchao Jin, Yongtao Zhang, Yan He, Fei Wang*", "journal": "Ceramics International", "volume": "2021, 47, 7692-7699", "if": "5.6", "zone": "2区", "doi": "10.1016/j.ceramint.2021"},
    {"id": 71, "year": 2021, "title": "How porous surfaces influence the nucleation and growth of methane hydrates", "authors": "Guodong Zhang, Bingjie Liu, Lu Xu, Runcheng Zhang, Yan He, Fei Wang*", "journal": "Fuel", "volume": "2021, 291, 120142", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2021.120142"},
    {"id": 72, "year": 2021, "title": "Micro noncontact interaction between falling particles and plates in viscous fluids", "authors": "Guodong Zhang, Ruobing Niu, Xiaoyun Shi, Runcheng Zhang, Fei Wang*", "journal": "Powder Technology", "volume": "2021, 381, 567-575", "if": "4.6", "zone": "2区", "doi": "10.1016/j.powtec.2021"},
    {"id": 73, "year": 2021, "title": "Polymeric superabsorbent hydrogel-based kinetic promotion for gas hydrate formation", "authors": "Meng-Ting Sun, Fu-Peng Song, Guo-Dong Zhang, Jing-Zhe Li, Fei Wang*", "journal": "Fuel", "volume": "2021, 288, 119676", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2021.119676"},
    {"id": 74, "year": 2020, "title": "Promotion of Activated Carbon on the Nucleation and Growth Kinetics of Methane Hydrates", "authors": "Guodong Zhang, Xiaoyun Shi, Runcheng Zhang, Kun Chao, Fei Wang*", "journal": "Frontiers in Chemistry", "volume": "2020, 8, 526101", "if": "3.8", "zone": "其他", "doi": "10.3389/fchem.2020.526101"},
    {"id": 75, "year": 2020, "title": "Biopromoters for Gas Hydrate Formation: A Mini Review of Current Status", "authors": "Yong-Tao Zhang, Fu-Lin Chen, Shi-Jie Yu, Fei Wang*", "journal": "Frontiers in Chemistry", "volume": "2020, 8, 481", "if": "4.2", "zone": "其他", "doi": "10.3389/fchem.2020.00481"},
    {"id": 76, "year": 2020, "title": "Graphene-based kinetic promotion to gas hydrate formation", "authors": "Mengting Sun, Guodong Zhang, Fei Wang*", "journal": "Frontiers in Chemistry", "volume": "2020, 8, 514", "if": "4.2", "zone": "其他", "doi": "10.3389/fchem.2020.00514"},
    {"id": 77, "year": 2020, "title": "Rapid Formation of Methane Hydrates with Compact Agglomeration via Regulating the Hydrophilic Groups of Nanopromoters", "authors": "Yan Lin, Li Liu, Meng-Ting Sun, Chen Chen, Guo-Dong Zhang, Yan He, Fei Wang*", "journal": "AIChE Journal", "volume": "2020, 66, e16296", "if": "4", "zone": "其他", "doi": "10.1002/aic.16296"},
    {"id": 78, "year": 2020, "title": "Adsorption-induced two-way nanoconvection enhances nucleation and growth kinetics of methane hydrates in confined porespace", "authors": "Guodong Zhang, Mengting Sun, Bingjie Liu, Fei Wang*", "journal": "Chemical Engineering Journal", "volume": "2020, 396, 121256", "if": "13.2", "zone": "1区", "doi": "10.1016/j.cej.2020.121256"},
    {"id": 79, "year": 2020, "title": "Synthesizing BaTiO3 Nanostructures to Explore Morphological Influence, Kinetics, and Mechanism of Piezocatalytic Dye Degradation", "authors": "Daiming Liu, Chengchao Jin, Fukai Shan*, Junjing He, Fei Wang*", "journal": "ACS Applied Materials & Interfaces", "volume": "2020, 12, 17443-17451", "if": "8.2", "zone": "2区", "doi": "10.1021/acsami"},
    {"id": 80, "year": 2019, "title": "Surfactant-based Promotion to Gas Hydrate Formation for Energy Storage", "authors": "Yan He, Meng-Ting Sun, Chen Chen, Guo-Dong Zhang, Kun Chao, Yan Lin, Fei Wang*", "journal": "Journal of Materials Chemistry A", "volume": "2019, 7, 21634-21661", "if": "9.5", "zone": "2区", "doi": "10.1039/c9ta"},
    {"id": 81, "year": 2019, "title": "Methane hydrate formation improved by water-soluble carbon nanotubes via π-π conjugated molecules functionalization", "authors": "Yuan-Mei Song, Fei Wang*, Sheng-Jun Luo*, Rong-Bo Guo*, Dongyan Xu", "journal": "Fuel", "volume": "2019, 243, 185-191", "if": "7.5", "zone": "2区", "doi": "10.1016/j.fuel.2019"},
    {"id": 82, "year": 2019, "title": "Improved methane elimination by methane-oxidizing bacteria immobilized on modified oil shale semicoke", "authors": "Meng-Ting Sun, Zhi-Man Yang, Xiao-Lei Fan, Fei Wang*, Rong-Bo Guo*, Dong-Yan Xu", "journal": "Science of the Total Environment", "volume": "2019, 655, 915-923", "if": "8", "zone": "2区", "doi": "10.1016/j.scitotenv.2019"},
    {"id": 83, "year": 2018, "title": "Hydrate-based CO2 capture: kinetic improvement via graphene-carried -SO3- and Ag nanoparticles", "authors": "Yan He, Fei Wang*", "journal": "Journal of Materials Chemistry A", "volume": "2018, 6, 22619-22625", "if": "9.5", "zone": "2区", "doi": "10.1039/c8ta"},
    {"id": 84, "year": 2018, "title": "Energy-efficient storage of methane in the formed hydrates with metal nanoparticles-grafted carbon nanotubes as promoter", "authors": "Yuan-Mei Song#, Fei Wang#, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "Applied Energy", "volume": "2018, 224, 175-183", "if": "11", "zone": "1区", "doi": "10.1016/j.apenergy.2018"},
    {"id": 85, "year": 2018, "title": "Rapid methane hydrate formation promoted by Ag&SDS-coated nanospheres for energy storage", "authors": "Fei Wang#, Yuan-Mei Song#, Guoqiang Liu, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "Applied Energy", "volume": "2018, 213, 227-234", "if": "11", "zone": "1区", "doi": "10.1016/j.apenergy.2018"},
    {"id": 86, "year": 2018, "title": "Calculation on the phase equilibrium and critical temperature of CH4/CO2", "authors": "Gang Guo#, Fei Wang#, Guo-Qiang Liu, Sheng-Jun Luo, Rong-Bo Guo*", "journal": "Process Safety and Environmental Protection", "volume": "2018, 113, 369-377", "if": "7.8", "zone": "2区", "doi": "10.1016/j.psep.2018"},
    {"id": 87, "year": 2017, "title": "Grafting of nano-Ag particles on -SO3--coated nanopolymers for promoting methane hydrate formation", "authors": "Fei Wang, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "Journal of Materials Chemistry A", "volume": "2017, 5, 18486-18493", "if": "9.5", "zone": "2区", "doi": "10.1039/c7ta"},
    {"id": 88, "year": 2017, "title": "Preparation of -SO3--coated nanopromoters for methane hydrate formation: effects of the existence pattern of -SO3-groups on the promotion efficiency", "authors": "Fei Wang, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "Journal of Materials Chemistry A", "volume": "2017, 5, 2640-2648", "if": "9.5", "zone": "2区", "doi": "10.1039/c6ta"},
    {"id": 89, "year": 2017, "title": "Amphiphilic-Polymer-Coated Carbon Nanotubes as Promoters for Methane Hydrate Formation", "authors": "Yuan-Mei Song#, Fei Wang#, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "ACS Sustainable Chemistry & Engineering", "volume": "2017, 5, 9271-9278", "if": "7.3", "zone": "1区", "doi": "10.1021/acssuschemeng"},
    {"id": 90, "year": 2017, "title": "Methane Hydrate Formation Promoted by -SO3--coated Graphene Oxide Nano-sheets", "authors": "Fei Wang#*, Han-Lin Meng#, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "ACS Sustainable Chemistry & Engineering", "volume": "2017, 5, 6597-6604", "if": "7.3", "zone": "1区", "doi": "10.1021/acssuschemeng"},
    {"id": 91, "year": 2017, "title": "Π-π conjugated molecule-based self-assembly of surfactants for promoting methane hydrate formation", "authors": "Fei Wang, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "ACS Sustainable Chemistry & Engineering", "volume": "2017, 5, 1408-1415", "if": "7.3", "zone": "1区", "doi": "10.1021/acssuschemeng"},
    {"id": 92, "year": 2017, "title": "Enhanced methane hydrate formation with SDS-coated Fe3O4 nanoparticles as promoters", "authors": "Guo-Qiang Liu#, Fei Wang#, Sheng-Jun Luo, Dong-Yan Xu*, Rong-Bo Guo", "journal": "Journal of Molecular Liquids", "volume": "2017, 230, 315-321", "if": "5.2", "zone": "2区", "doi": "10.1016/j.molliq.2017"},
    {"id": 93, "year": 2016, "title": "Improved methane hydrate formation and dissociation with nanospheres-based fixed surfactants", "authors": "Fei Wang, Guo-Qiang Liu, Han-Lin Meng, Gang Guo, Shengjun Luo*, Rongbo Guo*", "journal": "ACS Sustainable Chemistry & Engineering", "volume": "2016, 4, 2107-2113", "if": "7.3", "zone": "1区", "doi": "10.1021/acssuschemeng"},
    {"id": 94, "year": 2016, "title": "Experimental study on hydrate-based CO2 removal from CH4/CO2 mixture", "authors": "Fei Wang, Shan-Fei Fu, Gang Guo, Zhen-Zhen Jia, Sheng-Jun Luo*, Rong-Bo Guo*", "journal": "Energy", "volume": "2016, 104, 76-84", "if": "9.4", "zone": "1区", "doi": "10.1016/j.energy.2016"},
    {"id": 95, "year": 2016, "title": "Effects of surfactant micelles and surfactant-coated nanospheres on methane hydrate growth pattern", "authors": "Fei Wang, Gang Guo, Guo-Qiang Liu, Sheng-Jun Luo*, Rong-Bo Guo*", "journal": "Chemical Engineering Science", "volume": "2016, 144, 108-115", "if": "4.3", "zone": "2区", "doi": "10.1016/j.ces.2016"},
    {"id": 96, "year": 2015, "title": "Direction Controlled Methane Hydrate Growth", "authors": "Fei Wang, Lin Wang, Chuanshui Wang, Gang Guo, Guoqiang Liu, Shengjun Luo*, Rongbo Guo*", "journal": "Crystal Growth & Design", "volume": "2015, 15, 5112-5117", "if": "3.4", "zone": "1区", "doi": "10.1021/acs.cgd"},
    {"id": 97, "year": 2015, "title": "Effects of different anionic surfactants on methane hydrate formation", "authors": "Fei Wang, Zhen-Zhen Jia, Sheng-Jun Luo, Shan-Fei Fu, Lin Wang, Xiao-Shuang Shi, Chuan-Shui Wang, Rong-Bo Guo", "journal": "Chemical Engineering Science", "volume": "2015, 137, 896-903", "if": "4.3", "zone": "2区", "doi": "10.1016/j.ces.2015"},
    {"id": 98, "year": 2015, "title": "Methane hydrate formation with surfactants fixed on the surface of polystyrene nanospheres", "authors": "Fei Wang, Sheng-Jun Luo*, Shan-Fei Fu, Zhen-Zhen Jia, Meng Dai, Chuan-Shui Wang, Rong-Bo Guo*", "journal": "Journal of Materials Chemistry A", "volume": "2015, 3, 8316-8323", "if": "9.5", "zone": "2区", "doi": "10.1039/c5ta"},
    {"id": 99, "year": 2014, "title": "Effect of molecular structures of Gemini and polymerizable emulsifiers on cationic emulsion copolymerization of styrene and butyl acrylate", "authors": "Fei Wang, KuanJun Fang", "journal": "Colloid and Polymer Science", "volume": "2014, 292, 1449-1455", "if": "2.3", "zone": "其他", "doi": "10.1007/s00396"},
    {"id": 100, "year": 2014, "title": "Adsorption of cationic nanospheres on cotton fibers: the effect of emulsifiers used in the cationic emulsion polymerization", "authors": "Fei Wang, KuanJun Fang", "journal": "Colloid and Polymer Science", "volume": "2014, 292, 2375-2383", "if": "2.3", "zone": "其他", "doi": "10.1007/s00396"}
  ]
};

let allPublications = [];
let filteredPublications = [];
let yearFilter;
let typeFilter;
let authorFilter;
let zoneFilter;
let searchInput;
let resetFiltersBtn;
let resultsCount;

function hasChinese(text) {
    return /[\u4e00-\u9fa5]/.test(text || '');
}

function normalizeText(text) {
    return (text || '').toLowerCase().trim();
}

function splitAuthors(authors) {
    return (authors || '')
        .split(/[,，;；、/]/)
        .map(name => name.replace(/[*#]/g, '').trim())
        .filter(Boolean);
}

function formatAuthors(authors) {
    return (authors || '')
        .split(/[,，;；、/]/)
        .map(name => name.trim())
        .filter(Boolean)
        .map(name => {
            const isCorresponding = name.includes('*');
            const cleaned = name.replace(/[*#]/g, '').trim();
            return isCorresponding ? `<strong>${cleaned}</strong>` : cleaned;
        })
        .join(', ');
}

function deriveType(pub) {
    if (pub.type) return pub.type;
    const title = normalizeText(pub.title);
    const reviewKeywords = ['review', 'progress', 'advance', 'overview', 'editorial', 'perspective', 'insight', 'roadmap', '综述', '进展', '展望'];
    if (reviewKeywords.some(keyword => title.includes(keyword))) {
        return '综述';
    }
    if (hasChinese(pub.title) || hasChinese(pub.journal)) {
        return '中文期刊';
    }
    return '研究论文';
}

function buildSearchText(pub) {
    return normalizeText([
        pub.title,
        pub.journal,
        pub.volume,
        pub.doi,
        pub.authors,
        pub._type
    ].join(' '));
}

function getZoneClass(zone) {
    if (!zone) return '';
    if (zone.includes('1区')) return 'zone-1';
    if (zone.includes('2区')) return 'zone-2';
    return 'zone-other';
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', async function() {
    console.log('科研成果页面加载完成');
    
    // 加载论文数据
    await loadPublications();

    // 初始化筛选控件
    initFilters();
    attachFilterEvents();

    // 渲染论文列表
    renderPublications();
    
    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 加载论文数据
async function loadPublications() {
    try {
        // 直接使用嵌入的数据
        allPublications = publicationsData.publications.map(pub => {
            const authorsList = splitAuthors(pub.authors);
            const derivedType = deriveType(pub);
            return {
                ...pub,
                _authors: authorsList,
                _type: derivedType,
                _searchText: buildSearchText({ ...pub, _type: derivedType })
            };
        });
        filteredPublications = [...allPublications];
        console.log(`成功加载 ${allPublications.length} 篇论文`);
    } catch (error) {
        console.error('加载论文数据失败:', error);
        document.getElementById('publicationsList').innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-triangle"></i>
                <p>加载论文数据失败，请刷新页面重试</p>
            </div>
        `;
    }
}

function populateSelect(select, options, labelFormatter) {
    if (!select) return;
    options.forEach(option => {
        const optionEl = document.createElement('option');
        optionEl.value = option.value;
        optionEl.textContent = labelFormatter ? labelFormatter(option) : option.label;
        select.appendChild(optionEl);
    });
}

function initFilters() {
    yearFilter = document.getElementById('yearFilter');
    typeFilter = document.getElementById('typeFilter');
    authorFilter = document.getElementById('authorFilter');
    zoneFilter = document.getElementById('zoneFilter');
    searchInput = document.getElementById('searchInput');
    resetFiltersBtn = document.getElementById('resetFilters');
    resultsCount = document.getElementById('resultsCount');

    const years = Array.from(new Set(allPublications.map(pub => pub.year)))
        .sort((a, b) => b - a)
        .map(year => ({ value: String(year), label: `${year}年` }));

    const types = Array.from(new Set(allPublications.map(pub => pub._type)))
        .sort()
        .map(type => ({ value: type, label: type }));

    const zones = Array.from(new Set(allPublications.map(pub => pub.zone).filter(Boolean)))
        .sort()
        .map(zone => ({ value: zone, label: zone }));

    const authorCounts = {};
    allPublications.forEach(pub => {
        pub._authors.forEach(author => {
            authorCounts[author] = (authorCounts[author] || 0) + 1;
        });
    });
    const authors = Object.entries(authorCounts)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([author, count]) => ({
            value: author,
            label: `${author}（${count}）`
        }));

    populateSelect(yearFilter, years, option => option.label);
    populateSelect(typeFilter, types, option => option.label);
    populateSelect(zoneFilter, zones, option => option.label);
    populateSelect(authorFilter, authors, option => option.label);
}

function attachFilterEvents() {
    if (yearFilter) yearFilter.addEventListener('change', filterPublications);
    if (typeFilter) typeFilter.addEventListener('change', filterPublications);
    if (authorFilter) authorFilter.addEventListener('change', filterPublications);
    if (zoneFilter) zoneFilter.addEventListener('change', filterPublications);
    if (searchInput) {
        const debouncedFilter = debounce(filterPublications, 200);
        searchInput.addEventListener('input', debouncedFilter);
    }
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
}

function resetFilters() {
    if (yearFilter) yearFilter.value = 'all';
    if (typeFilter) typeFilter.value = 'all';
    if (authorFilter) authorFilter.value = 'all';
    if (zoneFilter) zoneFilter.value = 'all';
    if (searchInput) searchInput.value = '';
    filterPublications();
}

function updateResultsCount() {
    if (!resultsCount) return;
    resultsCount.textContent = `共 ${filteredPublications.length} 篇论文`;
}

function debounce(fn, wait) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(context, args), wait);
    };
}

// 渲染论文列表
function renderPublications() {
    const container = document.getElementById('publicationsList');
    const noResults = document.getElementById('noResults');
    
    if (filteredPublications.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        updateResultsCount();
        return;
    }
    
    noResults.style.display = 'none';
    updateResultsCount();
    
    // 按年份分组
    const groupedByYear = {};
    filteredPublications.forEach(pub => {
        if (!groupedByYear[pub.year]) {
            groupedByYear[pub.year] = [];
        }
        groupedByYear[pub.year].push(pub);
    });
    
    // 按年份排序（从新到旧）
    const years = Object.keys(groupedByYear).sort((a, b) => b - a);
    
    // 生成HTML
    let html = '';
    years.forEach(year => {
        const pubs = groupedByYear[year];
        html += `
            <div class="year-group" data-year="${year}">
                <h2 class="year-title">
                    <i class="fas fa-calendar-alt"></i> ${year}年度论文 
                    <span class="year-count">(${pubs.length}篇)</span>
                </h2>
                <div class="publications-list">
        `;
        
        pubs.forEach(pub => {
            html += renderPublicationItem(pub);
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 渲染单篇论文
function renderPublicationItem(pub) {
    const doiLink = pub.doi ? `https://doi.org/${pub.doi}` : '#';

    const zoneClass = getZoneClass(pub.zone);
    const authors = formatAuthors(pub.authors);

    return `
        <article class="publication-item" data-zone="${pub.zone || ''}" data-type="${pub._type || ''}">
            <div class="pub-content">
                <h3 class="pub-title">
                    ${pub.title}
                </h3>
                <p class="pub-authors">${authors}</p>
                <p class="pub-journal-line">
                    <span class="journal-inline">${pub.journal}</span>
                    ${pub.volume ? `<span class="pub-volume"> · ${pub.volume}</span>` : ''}
                </p>
                <div class="pub-meta">
                    <span class="pub-tag"><i class="fas fa-calendar"></i> ${pub.year}</span>
                    ${pub.zone ? `<span class="pub-tag ${zoneClass}"><i class="fas fa-bolt"></i> ${pub.zone}</span>` : ''}
                    ${pub.if ? `<span class="pub-tag"><i class="fas fa-chart-line"></i> IF ${pub.if}</span>` : ''}
                    ${pub._type ? `<span class="pub-tag"><i class="fas fa-layer-group"></i> ${pub._type}</span>` : ''}
                </div>
                ${pub.doi ? `
                <div class="pub-links">
                    <a href="${doiLink}" target="_blank" rel="noopener noreferrer" class="pub-link">
                        <i class="fas fa-external-link-alt"></i> 查看全文（DOI）
                    </a>
                </div>
                ` : ''}
            </div>
        </article>
    `;
}

// 筛选论文
function filterPublications() {
    const selectedYear = yearFilter ? yearFilter.value : 'all';
    const selectedType = typeFilter ? typeFilter.value : 'all';
    const selectedAuthor = authorFilter ? authorFilter.value : 'all';
    const selectedZone = zoneFilter ? zoneFilter.value : 'all';
    const searchValue = normalizeText(searchInput ? searchInput.value : '');
    
    filteredPublications = allPublications.filter(pub => {
        // 年份筛选
        if (selectedYear !== 'all' && pub.year.toString() !== selectedYear) {
            return false;
        }

        // 类型筛选
        if (selectedType !== 'all' && pub._type !== selectedType) {
            return false;
        }

        // 作者筛选
        if (selectedAuthor !== 'all' && !pub._authors.includes(selectedAuthor)) {
            return false;
        }

        // 分区筛选
        if (selectedZone !== 'all' && pub.zone !== selectedZone) {
            return false;
        }
        
        // 搜索筛选
        if (searchValue) {
            if (!pub._searchText.includes(searchValue)) {
                return false;
            }
        }
        
        return true;
    });
    
    renderPublications();
}

// 导出到全局作用域
window.filterPublications = filterPublications;
