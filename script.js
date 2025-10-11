// 🌐 نظام الترجمة متعدد اللغات - محدث
const translations = {
    ar: {
        // شريط اللغة
        current_lang: "العربية",
        
        // الهيدر
        company_name: "البراء",
        company_tagline: "حلول التبريد المركزي والتكييف",
        
        // العدادات
        completed_projects: "المشاريع المنجزة",
        clients: "العملاء",
        years_experience: "سنوات الخبرة",
        
        // قسم من نحن
        about_us: "من نحن",
        about_paragraph_1: "نحن شركة البراء المتخصصة في تنفيذ مشاريع التبريد المركزي وغرف ومصانع ومعامل الثلج بمختلف الأحجام والأنواع. نقوم بجميع مراحل العمل من الصفر حتى التسليم النهائي بشكل متكامل، بدءًا من أعمال العزل الحراري باستخدام ساندوتش بانل التي تضمن أعلى درجات العزل والكفاءة، ومرورًا بتوريد وتركيب شيلرات التبريد الحديثة المتوافقة مع متطلبات كل مشروع.",
        about_paragraph_2: "تشمل خدماتنا أيضًا تركيب المبخّرات والمجموعات، وتمديد الكهرباء، وإنشاء لوحات التحكم الكهربائية الخاصة بأنظمة التبريد والمراقبة الذكية.",
        about_paragraph_3: "نمتلك خبرة تمتد لأكثر من 27 عامًا في مجال التبريد والتكييف، حيث شغلتُ منصب مدير لمعمل الحافظ للتبريد والتكييف لمدة 10 سنوات، تلتها 17 سنة من المشاريع المستقلة التي نفذناها بكفاءة عالية ورضى تام من جميع عملائنا.",
        about_paragraph_4: "نتميز بخبرتنا الواسعة، وتقانتنا العالية، ودقتنا في المواعيد، إضافةً إلى التزامنا التام بإرضاء عملائنا وتقديم أفضل جودة ممكنة في كل مشروع.",
        
        // قسم المنتجات
        our_products: "منتجاتنا",
        service_1_title: "العزل الحراري - ساندوتش بانل",
        service_1_desc: "توريد وتركيب ألواح الساندوتش بانل عالية الجودة لعزل مثالي للمصانع وغرف التبريد.",
        service_2_title: "توريد وتركيب شيلرات التبريد",
        service_2_desc: "نوفر أحدث أنواع الشيلرات عالية الكفاءة لتلبية متطلبات مشاريع التبريد المركزي.",
        service_3_title: "تركيب المبخّرات والمجموعات",
        service_3_desc: "أحدث أنواع المبخّرات والمجموعات لضمان توزيع مثالي للبرودة داخل غرف التبريد.",
        service_4_title: "لوحات التحكم الكهربائية",
        service_4_desc: "تصميم وتركيب لوحات التحكم الذكية بأعلى معايير السلامة والدقة والاعتمادية.",
        service_5_title: "غرف التبريد والمصانع",
        service_5_desc: "تصميم وتنفيذ غرف التبريد وفق أحدث معايير العزل والتبريد بكفاءة عالية.",
        service_6_title: "مصانع وآلات صنع قوالب الثلج",
        service_6_desc: "تصميم مصانع متكاملة لإنتاج قوالب الثلج باستخدام أحدث التقنيات الحديثة.",
        
        // قسم التواصل
        contact_us: "تواصل معنا",
        first_name: "الاسم الأول",
        last_name: "الكنية",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        select_country: "اختر البلد",
        write_message: "اكتب رسالتك هنا...",
        send_inquiry: "إرسال الاستفسار",
        write_country_name: "اكتب اسم البلد هنا",
        please_enter_country: "يرجى إدخال اسم البلد",
        
        // القائمة الجانبية
        about_us_menu: "من نحن",
        our_products_menu: "منتجاتنا",
        contact_us_menu: "تواصل معنا",
        reviews_title_menu: "آراء العملاء",
        website_developer_menu: "منشئ الموقع",
        
        // الفوتر
        all_rights_reserved: "جميع الحقوق محفوظة",

        // قسم التعليقات
        reviews_title: "آراء العملاء",
        name: "الاسم",
        write_review: "اكتب رأيك هنا...",
        submit_review: "إرسال التعليق",
        rating_count: "تقييم",
        no_reviews_message: "لا توجد تعليقات بعد. كن أول من يعلق!",
        load_more_reviews: "عرض المزيد من التعليقات",
        remaining_reviews: "تعليق باقي",

        // قسم منشئ الموقع
        website_developer: "منشئ الموقع",
        developer_title: "مصمم ومطور الواجهات الأمامية",
        developer_description_1: "👨‍💻 مهندس IT، خريج جامعة فورتسبورغ – ألمانيا (بكالوريوس علوم الحاسب)، مقيم حاليًا في مدينة فورتسبورغ 🇩🇪، ابن صاحب الشركة وعمره 28 سنة.",
        // العربية:
developer_description_2: "لدي خبرة في تصميم وتطوير المواقع، البرمجة بلغات متعددة (Java, C++, Python, JavaScript, Node.js, HTML, CSS) وأعمال البرمجة الاحترافية والتحليل التقني لكل من Front-end و Back-end.",
        cv_link: "📄 السيرة الذاتية",
        
        // عناوين الأقسام العامة
        completed_projects_title: "المشاريع المنجزة",
        clients_title: "العملاء",
        experience_title: "سنوات الخبرة",
        
         // ... الترجمات الحالية ...
    reply: "رد",
    translate: "ترجمة", 
    delete: "حذف",
    owner_section_menu: "صاحب الشركة",
// 🇸🇦 العربية
owner_name: "حسين عرب",
owner_title: "المؤسس والمدير التنفيذي لشركة البراء",
owner_description_1: "🧊 حسين عرب — المؤسس والمدير التنفيذي لشركة البراء للتبريد والتكييف المركزي، من سوريا – محافظة اللاذقية 🇸🇾. يمتلك خبرة تمتد لأكثر من 27 عامًا في عالم أنظمة التبريد الصناعي، منها 10 سنوات كمدير لمعمل الحافظ للتبريد والتكييف، تلتها 17 عامًا من العمل الريادي المستقل في تأسيس وإدارة شركة البراء التي أصبحت اليوم من أبرز الشركات في مجالها.",
owner_description_2: "يتميّز حسين عرب باحترافه العالي، ودقته في التنفيذ، إضافة إلى رؤيته التطويرية في تقديم حلول تبريد تجمع بين الكفاءة والجودة باستخدام أحدث التقنيات الحديثة لضمان رضا العملاء وتجاوز توقعاتهم.",
owner_experience: "من خلال هذه المسيرة الطويلة، أثبت حسين عرب أن التميز لا يتحقق إلا بالإتقان، حيث جمع بين الخبرة العملية والرؤية المستقبلية، ليقدّم نموذجًا يُحتذى به في عالم التبريد الصناعي والأنظمة المركزية عالية الكفاءة.",

    },
    en: {
        // Language bar
        current_lang: "English",
        
        // Header
        company_name: "AL-BARAA",
        company_tagline: "Central Cooling & Air Conditioning Solutions",
        
        // Counters
        completed_projects: "Completed Projects",
        clients: "Clients",
        years_experience: "Years Experience",
        
        // About Us section
        about_us: "About Us",
        about_paragraph_1: "We are Al Baraa Company, specializing in implementing central cooling projects, cold rooms, ice factories, and laboratories of various sizes and types. We handle all work stages from scratch to final delivery in an integrated manner, starting with thermal insulation work using sandwich panels that ensure the highest levels of insulation and efficiency, and proceeding to supply and install modern cooling chillers that meet the requirements of each project.",
        about_paragraph_2: "Our services also include installing evaporators and units, electrical extensions, and creating electrical control panels for cooling systems and smart monitoring.",
        about_paragraph_3: "We have over 27 years of experience in the cooling and air conditioning field, where I held the position of director at Al-Hafiz Cooling and Air Conditioning Laboratory for 10 years, followed by 17 years of independent projects that we implemented with high efficiency and complete satisfaction from all our clients.",
        about_paragraph_4: "We are distinguished by our extensive experience, high technology, time accuracy, in addition to our full commitment to satisfying our customers and providing the best possible quality in every project.",
        
        // Products section
        our_products: "Our Products",
        service_1_title: "Thermal Insulation - Sandwich Panel",
        service_1_desc: "Supply and installation of high-quality sandwich panels for optimal insulation of factories and cooling rooms.",
        service_2_title: "Supply & Installation of Cooling Chillers",
        service_2_desc: "We provide the latest types of high-efficiency chillers to meet the requirements of central cooling projects.",
        service_3_title: "Installation of Evaporators & Units",
        service_3_desc: "Latest types of evaporators and units to ensure optimal cold distribution inside cooling rooms.",
        service_4_title: "Electrical Control Panels",
        service_4_desc: "Design and installation of smart control panels with the highest safety, accuracy, and reliability standards.",
        service_5_title: "Cooling Rooms & Factories",
        service_5_desc: "Design and implementation of cooling rooms according to the latest insulation and cooling standards with high efficiency.",
        service_6_title: "Ice Block Factories & Machines",
        service_6_desc: "Design of integrated factories for producing ice blocks using the latest modern technologies.",
        
        // Contact section
        contact_us: "Contact Us",
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        select_country: "Select Country",
        write_message: "Write your message here...",
        send_inquiry: "Send Inquiry",
        write_country_name: "Write country name here",
        please_enter_country: "Please enter country name",
        
        // Side menu
        about_us_menu: "About Us",
        our_products_menu: "Our Products",
        contact_us_menu: "Contact Us",
        reviews_title_menu: "Customer Reviews",
        website_developer_menu: "Website Developer",
        
        // Footer
        all_rights_reserved: "All Rights Reserved",

        // Reviews section
        reviews_title: "Customer Reviews",
        name: "Name",
        write_review: "Write your review here...",
        submit_review: "Submit Review",
        rating_count: "reviews",
        no_reviews_message: "No reviews yet. Be the first to comment!",
        load_more_reviews: "Load More Reviews",
        remaining_reviews: "reviews remaining",

        // Website Developer section
        website_developer: "Website Developer",
        developer_title: "Front-End Web Designer",
        developer_description_1: "👨‍💻 IT Engineer, graduate of University of Würzburg – Germany (Bachelor of Computer Science), currently residing in Würzburg 🇩🇪, son of the company owner and 28 years old.",
// الإنجليزية:
developer_description_2: "I have experience in website design and development, programming in multiple languages (Java, C++, Python, JavaScript, Node.js, HTML, CSS) and professional programming work and technical analysis for both Front-end and Back-end.",        cv_link: "📄 Curriculum Vitae",
        
        // General section titles
        completed_projects_title: "Completed Projects",
        clients_title: "Clients",
        experience_title: "Years Experience",
        // ... الترجمات الحالية ...
    reply: "Reply",
    translate: "Translate",
    delete: "Delete",
    owner_section_menu: "Company Owner",
// 🇬🇧 English
owner_name: "Hussein Arab",
owner_title: "Founder & CEO of Al-Baraa Company",
owner_description_1: "🧊 Hussein Arab — Founder and CEO of Al-Baraa Company for Central Cooling and Air Conditioning, from Syria – Lattakia Governorate 🇸🇾. He has over 27 years of experience in industrial cooling systems, including 10 years as Director of Al-Hafiz Cooling Factory, followed by 17 years leading Al-Baraa to become one of the most reputable companies in its field.",
owner_description_2: "Hussein Arab is known for his professionalism, precision, and visionary approach in providing advanced cooling solutions that combine efficiency, quality, and innovation to ensure complete customer satisfaction.",
owner_experience: "Through his long journey, Hussein Arab has proven that excellence is achieved through mastery — combining deep experience with a forward-looking vision to set a benchmark in the world of industrial and central cooling systems.",

    },
    de: {
        // Sprachleiste
        current_lang: "Deutsch",
        
        // Header
        company_name: "AL-BARAA",
        company_tagline: "Zentrale Kühl- und Klimaanlagenlösungen",
        
        // Zähler
        completed_projects: "Abgeschlossene Projekte",
        clients: "Kunden",
        years_experience: "Jahre Erfahrung",
        
        // Über uns Abschnitt
        about_us: "Über uns",
        about_paragraph_1: "Wir sind das Unternehmen Al Baraa, spezialisiert auf die Durchführung von Projekten für Zentralkühlung, Kühlräume, Eisfabriken und Labore verschiedener Größen und Arten. Wir übernehmen alle Arbeitsphasen von Grund auf bis zur endgültigen Übergabe in integrierter Weise, beginnend mit Wärmedämmungsarbeiten mit Sandwichplatten, die höchste Dämm- und Effizienzgrade gewährleisten, bis hin zur Lieferung und Installation moderner Kühlaggregate, die den Anforderungen jedes Projekts entsprechen.",
        about_paragraph_2: "Unsere Dienstleistungen umfassen auch die Installation von Verdampfern und Einheiten, elektrische Erweiterungen und die Erstellung elektrischer Steuerungspaneele für Kühlsysteme und intelligente Überwachung.",
        about_paragraph_3: "Wir verfügen über mehr als 27 Jahre Erfahrung im Bereich Kühlung und Klimaanlagen, in denen ich die Position des Direktors im Al-Hafiz Kühl- und Klimaanlagenlabor für 10 Jahre innehatte, gefolgt von 17 Jahren unabhängiger Projekte, die wir mit hoher Effizienz und vollständiger Zufriedenheit aller unserer Kunden durchgeführt haben.",
        about_paragraph_4: "Wir zeichnen uns durch unsere umfangreiche Erfahrung, hochwertige Technologie, Termintreue sowie unsere vollständige Verpflichtung zur Zufriedenheit unserer Kunden und zur Bereitstellung der bestmöglichen Qualität in jedem Projekt aus.",
        
        // Produkte Abschnitt
        our_products: "Unsere Produkte",
        service_1_title: "Wärmedämmung - Sandwichplatten",
        service_1_desc: "Lieferung und Installation hochwertiger Sandwichplatten für optimale Isolierung von Fabriken und Kühlräumen.",
        service_2_title: "Lieferung & Installation von Kühlaggregaten",
        service_2_desc: "Wir bieten die neuesten Arten von hocheffizienten Kühlaggregaten, um den Anforderungen von Zentralkühlungsprojekten gerecht zu werden.",
        service_3_title: "Installation von Verdampfern & Einheiten",
        service_3_desc: "Neueste Arten von Verdampfern und Einheiten für eine optimale Kälteverteilung in Kühlräumen.",
        service_4_title: "Elektrische Steuerungspaneele",
        service_4_desc: "Design und Installation intelligenter Steuerungspaneele mit höchsten Sicherheits-, Genauigkeits- und Zuverlässigkeitsstandards.",
        service_5_title: "Kühlräume & Fabriken",
        service_5_desc: "Design und Umsetzung von Kühlräumen nach neuesten Isolierungs- und Kühlstandards mit hoher Effizienz.",
        service_6_title: "Eisblockfabriken & Maschinen",
        service_6_desc: "Design integrierter Fabriken zur Herstellung von Eisblöcken unter Verwendung der neuesten modernen Technologien.",
        
        // Kontakt Abschnitt
        contact_us: "Kontaktieren Sie uns",
        first_name: "Vorname",
        last_name: "Nachname",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        select_country: "Land auswählen",
        write_message: "Schreiben Sie hier Ihre Nachricht...",
        send_inquiry: "Anfrage senden",
        write_country_name: "Schreiben Sie den Ländernamen hier",
        please_enter_country: "Bitte geben Sie den Ländernamen ein",
        
        // Seitenmenü
        about_us_menu: "Über uns",
        our_products_menu: "Unsere Produkte",
        contact_us_menu: "Kontakt",
        reviews_title_menu: "Kundenbewertungen",
        website_developer_menu: "Webseitenentwickler",
        
        // Footer
        all_rights_reserved: "Alle Rechte vorbehalten",

        // Reviews section
        reviews_title: "Kundenbewertungen",
        name: "Name",
        write_review: "Schreiben Sie hier Ihre Bewertung...",
        submit_review: "Bewertung absenden",
        rating_count: "Bewertungen",
        no_reviews_message: "Noch keine Bewertungen. Seien Sie der erste, der kommentiert!",
        load_more_reviews: "Mehr Bewertungen laden",
        remaining_reviews: "Bewertungen verbleibend",

        // Website Developer Abschnitt
        website_developer: "Webseitenentwickler",
        developer_title: "Front-End Webdesigner",
        developer_description_1: "👨‍💻 IT-Ingenieur, Absolvent der Universität Würzburg – Deutschland (Bachelor of Computer Science), derzeit wohnhaft in Würzburg 🇩🇪, Sohn des Firmeninhabers und 28 Jahre alt.",
// الألمانية:
developer_description_2: "Ich habe Erfahrung in Webseitengestaltung und -entwicklung, Programmierung in mehreren Sprachen (Java, C++, Python, JavaScript, Node.js, HTML, CSS) sowie professioneller Programmierarbeit und technischer Analyse für sowohl Front-end als auch Back-end.",        cv_link: "📄 Lebenslauf",
        
        // Allgemeine Abschnittstitel
        completed_projects_title: "Abgeschlossene Projekte",
        clients_title: "Kunden",
        experience_title: "Jahre Erfahrung",
        // ... الترجمات الحالية ...
    reply: "Antworten",
    translate: "Übersetzen", 
    delete: "Löschen",
    owner_section_menu: "Firmeninhaber",
// 🇩🇪 Deutsch
owner_name: "Hussein Arab",
owner_title: "Gründer & Geschäftsführer von Al-Baraa",
owner_description_1: "🧊 Hussein Arab — Gründer und Geschäftsführer von Al-Baraa für zentrale Kühl- und Klimaanlagen, aus Syrien – Gouvernorat Latakia 🇸🇾. Mit über 27 Jahren Erfahrung in der industriellen Kühltechnik, darunter 10 Jahre als Direktor der Al-Hafiz Kühl- und Klimaanlagenfabrik, führt er Al-Baraa seit über 17 Jahren erfolgreich als eines der führenden Unternehmen in diesem Bereich.",
owner_description_2: "Hussein Arab zeichnet sich durch hohe Professionalität, Präzision und eine visionäre Herangehensweise aus, um innovative Kühllösungen zu bieten, die Effizienz, Qualität und moderne Technologie vereinen und höchste Kundenzufriedenheit gewährleisten.",
owner_experience: "Durch seine langjährige Laufbahn hat Hussein Arab bewiesen, dass Exzellenz nur durch Perfektion erreicht wird – eine Kombination aus praktischer Erfahrung und visionärem Denken, die Maßstäbe in der industriellen und zentralen Kühltechnik setzt."

    }
};

// 🌍 بيانات البلدان مترجمة
const countriesData = {
    ar: {
        "سوريا": "سوريا",
        "السعودية": "السعودية", 
        "الإمارات": "الإمارات",
        "العراق": "العراق",
        "مصر": "مصر",
        "لبنان": "لبنان",
        "الأردن": "الأردن",
        "الكويت": "الكويت",
        "قطر": "قطر",
        "عُمان": "عُمان",
        "اليمن": "اليمن",
        "فلسطين": "فلسطين",
        "البحرين": "البحرين",
        "تركيا": "تركيا",
        "ليبيا": "ليبيا",
        "تونس": "تونس",
        "الجزائر": "الجزائر",
        "المغرب": "المغرب",
        "السودان": "السودان",
        "الصومال": "الصومال",
        "اليونان": "اليونان",
        "فرنسا": "فرنسا",
        "ألمانيا": "ألمانيا",
        "إيطاليا": "إيطاليا",
        "إسبانيا": "إسبانيا",
        "بريطانيا": "بريطانيا",
        "الولايات المتحدة": "الولايات المتحدة",
        "كندا": "كندا",
        "روسيا": "روسيا",
        "الهند": "الهند",
        "باكستان": "باكستان",
        "الصين": "الصين",
        "اليابان": "اليابان",
        "كوريا الجنوبية": "كوريا الجنوبية",
        "أستراليا": "أستراليا",
        "دولة أخرى": "دولة أخرى"
    },
    en: {
        "سوريا": "Syria",
        "السعودية": "Saudi Arabia",
        "الإمارات": "UAE",
        "العراق": "Iraq",
        "مصر": "Egypt",
        "لبنان": "Lebanon",
        "الأردن": "Jordan",
        "الكويت": "Kuwait",
        "قطر": "Qatar",
        "عُمان": "Oman",
        "اليمن": "Yemen",
        "فلسطين": "Palestine",
        "البحرين": "Bahrain",
        "تركيا": "Turkey",
        "ليبيا": "Libya",
        "تونس": "Tunisia",
        "الجزائر": "Algeria",
        "المغرب": "Morocco",
        "السودان": "Sudan",
        "الصومال": "Somalia",
        "اليونان": "Greece",
        "فرنسا": "France",
        "ألمانيا": "Germany",
        "إيطاليا": "Italy",
        "إسبانيا": "Spain",
        "بريطانيا": "Britain",
        "الولايات المتحدة": "United States",
        "كندا": "Canada",
        "روسيا": "Russia",
        "الهند": "India",
        "باكستان": "Pakistan",
        "الصين": "China",
        "اليابان": "Japan",
        "كوريا الجنوبية": "South Korea",
        "أستراليا": "Australia",
        "دولة أخرى": "Other Country"
    },
    de: {
        "سوريا": "Syrien",
        "السعودية": "Saudi-Arabien",
        "الإمارات": "VAE",
        "العراق": "Irak",
        "مصر": "Ägypten",
        "لبنان": "Libanon",
        "الأردن": "Jordanien",
        "الكويت": "Kuwait",
        "قطر": "Katar",
        "عُمان": "Oman",
        "اليمن": "Jemen",
        "فلسطين": "Palästina",
        "البحرين": "Bahrain",
        "تركيا": "Türkei",
        "ليبيا": "Libyen",
        "تونس": "Tunesien",
        "الجزائر": "Algerien",
        "المغرب": "Marokko",
        "السودان": "Sudan",
        "الصومال": "Somalia",
        "اليونان": "Griechenland",
        "فرنسا": "Frankreich",
        "ألمانيا": "Deutschland",
        "إيطاليا": "Italien",
        "إسبانيا": "Spanien",
        "بريطانيا": "Großbritannien",
        "الولايات المتحدة": "Vereinigte Staaten",
        "كندا": "Kanada",
        "روسيا": "Russland",
        "الهند": "Indien",
        "باكستان": "Pakistan",
        "الصين": "China",
        "اليابان": "Japan",
        "كوريا الجنوبية": "Südkorea",
        "أستراليا": "Australien",
        "دولة أخرى": "Anderes Land"
    }
};

// 🌍 دالة الكشف عن لغة المستخدم
function detectUserLanguage() {
    // الحصول على لغة المتصفح
    const browserLang = navigator.language || navigator.userLanguage;
    
    // تحويل إلى كود لغة مكون من حرفين (مثل 'en-US' -> 'en')
    const langCode = browserLang.split('-')[0];
    
    // إذا كانت اللغة العربية أو الألمانية، استخدمها، وإلا استخدم الإنجليزية
    if (langCode === 'ar') return 'ar';
    if (langCode === 'de') return 'de';
    return 'en';
}

// 🌍 دالة تحديث قائمة البلدان
function updateCountries(lang) {
    const countrySelect = document.getElementById('country');
    const otherCountryInput = document.getElementById('otherCountry');
    const currentValue = countrySelect.value; // حفظ القيمة الحالية
    
    // مسح الخيارات الحالية
    countrySelect.innerHTML = '';
    
    // إضافة الخيار الافتراضي
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = translations[lang].select_country;
    countrySelect.appendChild(defaultOption);
    
    // إضافة جميع البلدان المترجمة
    Object.entries(countriesData[lang]).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = key; // الحفاظ على القيمة الأصلية للإرسال
        option.textContent = value;
        countrySelect.appendChild(option);
    });
    
    // تحديث placeholder لحقل "دولة أخرى"
    if (otherCountryInput) {
        otherCountryInput.setAttribute('placeholder', translations[lang].write_country_name);
    }
    
    // استعادة القيمة المختارة سابقاً إن وجدت
    if (currentValue) {
    if (currentValue === "دولة أخرى" && otherCountryInput && otherCountryInput.value) {
        countrySelect.value = "دولة أخرى";
        otherCountryInput.classList.add('visible'); // ✅ استخدم class بدلاً من style
    } else if (countriesData[lang][currentValue]) {
        countrySelect.value = currentValue;
        if (otherCountryInput) {
            otherCountryInput.classList.remove('visible'); // ✅ استخدم class بدلاً من style
        }
    }
}
}

// 🌍 دالة التعامل مع تغيير اختيار البلد
function handleCountryChange() {
    const countrySelect = document.getElementById('country');
    const otherCountryInput = document.getElementById('otherCountry');
    
    if (!countrySelect || !otherCountryInput) return;
    
    if (countrySelect.value === "دولة أخرى") {
        otherCountryInput.classList.add('visible');
        otherCountryInput.required = true;
    } else {
        otherCountryInput.classList.remove('visible');
        otherCountryInput.required = false;
        otherCountryInput.value = ''; // مسح القيمة عند اختيار بلد معروف
    }
}

// 🌍 دالة التحقق من النموذج قبل الإرسال
function validateFormBeforeSubmit() {
    const countrySelect = document.getElementById('country');
    const otherCountryInput = document.getElementById('otherCountry');
    
    if (!countrySelect || !otherCountryInput) return true;
    
    if (countrySelect.value === "دولة أخرى" && !otherCountryInput.value.trim()) {
        const currentLang = document.documentElement.lang || 'ar';
        alert(translations[currentLang]?.please_enter_country || 'يرجى إدخال اسم البلد');
        otherCountryInput.focus();
        return false;
    }
    return true;
}

// 🌍 دالة تغيير اللغة - محسنة ومصححة
function changeLanguage(lang) {
    // حفظ اللغة المختارة في localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // تحديث زر اللغة الحالي
    document.getElementById('currentLangFlag').textContent = 
        lang === 'ar' ? '🇸🇦' : lang === 'de' ? '🇩🇪' : '🇺🇸';
    document.getElementById('currentLangText').textContent = translations[lang].current_lang;
    
    // تحديث جميع العناصر المترجمة
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // تحديث جميع العناصر النائبة (placeholder)
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // ✅ التأكد من إعادة الترجمة
    setTimeout(() => {
        renderReviews();
    }, 100);
    
    // تحديث قائمة البلدان
    updateCountries(lang);
    
    // ✅ تحديث عناوين الأقسام الإضافية
    updateAdditionalElements(lang);
    
    // ✅ إعادة حساب وتحديث ملخص التقييمات فوراً
    updateReviewsSummary();
    
    // ✅ إصلاح خاص: تحديث نص "تقييم" في قسم التعليقات مباشرة
    const ratingCountElements = document.querySelectorAll('[data-translate="rating_count"]');
    ratingCountElements.forEach(element => {
        element.textContent = translations[lang].rating_count;
    });
    
    // ✅ الإصلاح الرئيسي: إعادة عرض التعليقات لتطبيق الترجمة على الرسائل الديناميكية
    renderReviews();
    
    // تغيير اتجاه الصفحة للغة العربية
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
    
    // إغلاق قائمة اللغة
    document.querySelector('.language-dropdown').classList.remove('active');
}


// دالة إضافية لتحديث العناصر التي لا تحتوي على data-translate
function updateAdditionalElements(lang) {
    // تحديث عناوين العدادات إذا كانت موجودة
    const counterLabels = document.querySelectorAll('.counter-label');
    if (counterLabels.length >= 3) {
        counterLabels[0].textContent = translations[lang].completed_projects;
        counterLabels[1].textContent = translations[lang].clients;
        counterLabels[2].textContent = translations[lang].years_experience;
    }
    
    // ✅ إصلاح: تحديث نص "تقييم" في قسم التعليقات بشكل صحيح
    const ratingCountElement = document.querySelector('.rating-count');
    if (ratingCountElement) {
        const totalReviews = document.getElementById('totalReviews').textContent;
        ratingCountElement.innerHTML = `<span id="totalReviews">${totalReviews}</span> <span data-translate="rating_count">${translations[lang].rating_count}</span>`;
    }
    
    // ✅ تحديث عناوين الأقسام العامة إذا كانت موجودة
    const sectionTitles = document.querySelectorAll('[data-translate]');
    sectionTitles.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// 🌍 تهيئة نظام اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحديد اللغة بناءً على:
    // 1. اللغة المحفوظة مسبقًا
    // 2. لغة المتصفح
    // 3. اللغة الافتراضية (الإنجليزية)
    const savedLang = localStorage.getItem('selectedLanguage');
    const detectedLang = detectUserLanguage();
    const initialLang = savedLang || detectedLang || 'en';
    
    // تطبيق اللغة المختارة
    changeLanguage(initialLang);
    
    // إضافة أحداث النقر لشريط اللغة
    const langBtn = document.getElementById('currentLangBtn');
    const langDropdown = document.querySelector('.language-dropdown');
    const langOptions = document.querySelectorAll('.language-option');
    
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            langDropdown.classList.toggle('active');
        });
    }
    
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });
    
    // إغلاق قائمة اللغة عند النقر خارجها
    document.addEventListener('click', function(event) {
        if (!langDropdown.contains(event.target)) {
            langDropdown.classList.remove('active');
        }
    });
    
    // إضافة أحداث لقائمة البلدان
    const countrySelect = document.getElementById('country');
    const contactForm = document.querySelector('.contact-form');
    
    if (countrySelect) {
        countrySelect.addEventListener('change', handleCountryChange);
    }
    
    // التحقق قبل إرسال النموذج
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!validateFormBeforeSubmit()) {
                e.preventDefault();
            }
        });
    }
});

// 🧮 عداد المشاريع - إصدار مبسط
document.addEventListener("DOMContentLoaded", function () {
    
    // دالة العد الأساسية
    function startCounter(id, target, duration = 2000) {
        const element = document.getElementById(id);
        if (!element) return;
        
        // دائماً نبدأ من الصفر
        element.textContent = "0";
        
        let start = 0;
        const increment = target / (duration / 10);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + "+";
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + "+";
            }
        }, 10);
    }

    // تشغيل جميع العدادات
    function runAllCounters() {
        startCounter("projectCounter", 1000);
        startCounter("clientCounter", 700);
        startCounter("experienceCounter", 27);
    }

    // بدء العدادات فور تحميل الصفحة
    runAllCounters();

    // إعادة التشغيل عند التمرير (باستخدام Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تأخير بسيط لملاحظة إعادة العد
                setTimeout(runAllCounters, 500);
            }
        });
    }, { threshold: 0.5 });

    // مراقبة العناصر
    const counters = [
        document.getElementById("projectCounter"),
        document.getElementById("clientCounter"),
        document.getElementById("experienceCounter")
    ];

    counters.forEach(counter => {
        if (counter) observer.observe(counter);
    });
});



// 🧊 تأثير تلاشي الصورة عند التمرير
window.addEventListener("scroll", function() {
    const heroImage = document.querySelector(".hero-image");
    const heroText = document.querySelector(".hero-text");
    
    if (!heroImage || !heroText) return;
    
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight * 0.8;

    let opacity = 1 - scrollY / maxScroll;
    if (opacity < 0) opacity = 0;

    heroImage.style.opacity = opacity;
    heroText.style.opacity = opacity;
});

// 😂 حركة تفاعلية لشعار الواتساب أثناء التمرير
window.addEventListener("scroll", function() {
    const whatsappBtn = document.querySelector(".whatsapp-float");
    if (!whatsappBtn) return; // حماية من الخطأ لو الزر مش موجود
    const scrollY = window.scrollY;
    // يجعل الزر يتحرك قليلًا لأعلى وأسفل مع التمرير
    whatsappBtn.style.transform = `translateY(${Math.sin(scrollY / 50) * 10}px)`;
});

// كتابة الاسم حرفاً حرفاً
const titleText = "AL BARAA";
const titleElement = document.getElementById("intro-title");
let i = 0;

function typeText() {
    if (!titleElement) return;
    
    if (i < titleText.length) {
        titleElement.textContent += titleText[i];
        titleElement.style.opacity = 1;
        i++;
        setTimeout(typeText, 150); // سرعة الكتابة
    }
}

window.addEventListener("load", () => {
    setTimeout(typeText, 2000); // تبدأ بعد الخط والصورة
    setTimeout(() => {
        const intro = document.getElementById("intro");
        if (intro) {
            intro.style.display = "none";
        }
    }, 5500); // تختفي شاشة الافتتاح بعد 7.5 ثوانٍ
});

// 🖼️ بيانات الصور لكل خدمة
const galleries = {
    "sandwich-panel": [
        "ChatGPT Image 6. Okt. 2025, 21_41_46.png"
    ],
    "chillers": [
        "ChatGPT Image 6. Okt. 2025, 21_50_56.png",
        "WhatsApp Image 2025-10-05 at 21.01.49 (6).jpeg"
    ],
    "evaporators": [
        "2-1-industrial-cubic-evaporator_01.png",
        "ChatGPT Image 6. Okt. 2025, 21_55_28.png",
        "2-1-industrial-cubic-evaporator_07.jpg",
        "2-1-industrial-cubic-evaporator_04b.jpg"
    ],
    "control-panels": [
        "images.jpg",
        "WhatsApp Image 2025-10-05 at 21.01.48 (5).jpeg",
        "What-Is-the-Full-Name-of-PCC-in-Electrical-Engineering-1024x682.webp"
    ],
    "cold-rooms": [
        "walk-in-freezer-cooler-combo-in-new-york-usa-2_optimized-1200x675-1.jpg",
        "10-2_medical-cold-storage-solution_05.jpg",
        "ChatGPT Image 6. Okt. 2025, 22_28_04.png",
        "cooling-room-thegem-gallery-fullwidth.webp"
    ],
    "ice-block-factory": [
        "unnamed.jpg",
        "WhatsApp Image 2025-10-05 at 21.01.49 (6).jpeg"
    ]
};

// ✅ استبدال service-item بـ service-card
const serviceItems = document.querySelectorAll(".service-card");
const galleryModal = document.getElementById("galleryModal");
const gallerySingleImage = document.getElementById("gallerySingleImage");
const closeGalleryBtn = document.querySelector(".close-gallery");
const prevBtn = document.querySelector(".gallery-nav.prev");
const nextBtn = document.querySelector(".gallery-nav.next");

let currentGallery = [];
let currentIndex = 0;

serviceItems.forEach(item => {
    item.addEventListener("click", () => {
        const galleryKey = item.getAttribute("data-gallery");
        currentGallery = galleries[galleryKey] || [];
        currentIndex = 0;
        openGallery();
    });
});

function openGallery() {
    if (currentGallery.length > 0 && gallerySingleImage && galleryModal) {
        gallerySingleImage.src = currentGallery[currentIndex];
        galleryModal.style.display = "flex";
    }
}

function showImage(index) {
    if (currentGallery.length > 0 && gallerySingleImage) {
        gallerySingleImage.src = currentGallery[index];
    }
}

if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener("click", () => {
        if (galleryModal) {
            galleryModal.style.display = "none";
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        showImage(currentIndex);
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        showImage(currentIndex);
    });
}

// 📜 التمرير السلس عند الضغط على روابط القائمة الجانبية
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // يمكن تعديل المسافة حسب تصميمك
                behavior: 'smooth'
            });
        }
    });
});

// إضافة رسالة تأكيد بعد إرسال النموذج
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    // يمكنك إضافة رسالة تأكيد هنا
    setTimeout(() => {
        const currentLang = document.documentElement.lang || 'ar';
        if (currentLang === 'ar') {
            alert('تم إرسال استفسارك بنجاح! سنتواصل معك قريباً.');
        } else if (currentLang === 'de') {
            alert('Ihre Anfrage wurde erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.');
        } else {
            alert('Your inquiry has been sent successfully! We will contact you soon.');
        }
    }, 1000);
});

// 💬 نظام التعليقات المتطور - محدث ومحسن
const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");
const starRating = document.getElementById("starRating");

let selectedStars = 0;
let reviews = [];
let visibleReviews = 3; // عدد التعليقات الظاهرة افتراضياً

// 🗂️ مفتاح التخزين
const STORAGE_KEY = "customer_reviews";

// 📥 تحميل التعليقات من localStorage عند بدء التشغيل
function loadReviews() {
    const savedReviews = localStorage.getItem(STORAGE_KEY);
    if (savedReviews) {
        reviews = JSON.parse(savedReviews);
    } else {
        reviews = [];
    }
}

// 📤 حفظ التعليقات في localStorage
function saveReviews() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

// ⭐ اختيار النجوم
if (starRating) {
    starRating.querySelectorAll("span").forEach(star => {
        star.addEventListener("click", () => {
            selectedStars = parseInt(star.getAttribute("data-value"));
            updateStars();
        });
    });
}

function updateStars() {
    if (starRating) {
        starRating.querySelectorAll("span").forEach(star => {
            const value = parseInt(star.getAttribute("data-value"));
            star.classList.toggle("active", value <= selectedStars);
        });
    }
}

// 📝 إرسال التعليق الرئيسي
if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("reviewerName").value.trim();
        const email = document.getElementById("reviewerEmail").value.trim();
        const text = document.getElementById("reviewText").value.trim();

        if (!name || !email || !text || !selectedStars) {
            showToast("⚠️ يرجى ملء جميع الحقول واختيار عدد النجوم");
            return;
        }

        const newReview = {
            id: Date.now(),
            name,
            email,
            text,
            stars: selectedStars,
            likes: 0,
            replies: [],
            date: new Date().toISOString(),
            timestamp: Date.now()
        };

        reviews.unshift(newReview);
        saveReviews();
        renderReviews();
        reviewForm.reset();
        selectedStars = 0;
        updateStars();
        showToast("✅ تم إرسال تعليقك بنجاح");
    });
}

// 📊 تحديث ملخص التقييمات - محسنة
function updateReviewsSummary() {
    const total = reviews.length;
    const counts = [0, 0, 0, 0, 0, 0];
    let totalStars = 0;

    reviews.forEach(r => {
        counts[r.stars]++;
        totalStars += r.stars;
    });

    const avg = total > 0 ? (totalStars / total).toFixed(1) : "0.0";

    const averageRatingElement = document.getElementById('averageRatingValue');
    const totalReviewsElement = document.getElementById('totalReviews');
    
    if (averageRatingElement) averageRatingElement.textContent = avg;
    if (totalReviewsElement) totalReviewsElement.textContent = total;

    // ✅ الحصول على اللغة الحالية مباشرة
    const currentLang = document.documentElement.lang || 'ar';
    
    // ✅ تحديث جميع عناصر "rating_count" مباشرة
    const ratingCountElements = document.querySelectorAll('[data-translate="rating_count"]');
    ratingCountElements.forEach(element => {
        element.textContent = translations[currentLang].rating_count;
    });

    for (let i = 1; i <= 5; i++) {
        const count = counts[i];
        const percent = total > 0 ? (count / total) * 100 : 0;
        const countElement = document.getElementById(`count-${i}`);
        const barElement = document.getElementById(`bar-${i}`);
        
        if (countElement) countElement.textContent = count;
        if (barElement) barElement.style.width = `${percent}%`;
    }
}


// 🔄 إعادة تهيئة كاملة لنظام التعليقات عند تغيير اللغة
function forceRefreshReviews() {
    if (reviewsList) {
        renderReviews();
    }
}

// 📝 عرض التعليقات والردود المتداخلة - محدثة
function renderReviews() {
    if (!reviewsList) return;
    
    reviewsList.innerHTML = '';

    // ✅ الحصول على اللغة الحالية مباشرة من html element
    const currentLang = document.documentElement.lang || 'ar';
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = `<p style="text-align: center; color: #aaa;">${translations[currentLang].no_reviews_message}</p>`;
        return;
    }

    // عرض التعليقات المرئية فقط
    const reviewsToShow = reviews.slice(0, visibleReviews);
    
    reviewsToShow.forEach((review) => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <span class="review-name">${review.name}</span>
                    <span class="review-date">${formatDate(review.date)}</span>
                </div>
                <span class="review-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</span>
            </div>
            <div class="review-text">${review.text}</div>
            <div class="review-actions">
                <span class="like-btn" data-id="${review.id}">👍 ${review.likes}</span>
                <span class="reply-btn" data-id="${review.id}">💬 ${translations[currentLang].reply || 'رد'}</span>
                <span class="translate-btn" data-id="${review.id}">🌐 ${translations[currentLang].translate || 'ترجمة'}</span>
                ${isAdmin ? `<span class="delete-btn" data-id="${review.id}">🗑️ ${translations[currentLang].delete || 'حذف'}</span>` : ''}
            </div>
            <div class="reply-section" id="replies-${review.id}">
                ${renderReplies(review.replies, review.id)}
            </div>
        `;
        reviewsList.appendChild(item);
    });

    // ✅ إضافة زر عرض المزيد مع الترجمة
    if (reviews.length > visibleReviews) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.className = 'load-more-btn';
        loadMoreBtn.innerHTML = `
            <span>${translations[currentLang].load_more_reviews}</span>
            <span class="remaining-count">(${reviews.length - visibleReviews} ${translations[currentLang].remaining_reviews})</span>
        `;
        loadMoreBtn.addEventListener('click', loadMoreReviews);
        reviewsList.appendChild(loadMoreBtn);
    }

    attachReviewEvents();
    updateReviewsSummary();
}

// 🔄 عرض الردود المتداخلة
function renderReplies(replies, parentId) {
    if (!replies || replies.length === 0) return '';
    
    return replies.map((reply, index) => `
        <div class="reply-item" data-reply-id="${reply.id}">
            <div class="reply-header">
                <div class="replyer-info">
                    <strong class="reply-name">${reply.name}</strong>
                    <span class="reply-date">${formatDate(reply.date)}</span>
                </div>
                ${isAdmin ? `<span class="delete-reply-btn" data-parent-id="${parentId}" data-reply-id="${reply.id}">🗑️</span>` : ''}
            </div>
            <div class="reply-text">${reply.text}</div>
            <div class="reply-actions">
                <span class="like-reply-btn" data-parent-id="${parentId}" data-reply-id="${reply.id}">👍 ${reply.likes || 0}</span>
                <span class="reply-to-reply-btn" data-parent-id="${parentId}" data-reply-id="${reply.id}">↪️ رد</span>
            </div>
            <div class="nested-replies" id="nested-${reply.id}">
                ${reply.replies ? renderNestedReplies(reply.replies, parentId, reply.id) : ''}
            </div>
        </div>
    `).join('');
}

// 🔄 عرض الردود المتداخلة (مستويات أعمق)
function renderNestedReplies(replies, parentId, replyId) {
    if (!replies || replies.length === 0) return '';
    
    return replies.map((nestedReply, nestedIndex) => `
        <div class="nested-reply-item" data-nested-reply-id="${nestedReply.id}">
            <div class="nested-reply-header">
                <div class="nested-replyer-info">
                    <strong class="nested-reply-name">${nestedReply.name}</strong>
                    <span class="nested-reply-date">${formatDate(nestedReply.date)}</span>
                </div>
                ${isAdmin ? `<span class="delete-nested-reply-btn" data-parent-id="${parentId}" data-reply-id="${replyId}" data-nested-reply-id="${nestedReply.id}">🗑️</span>` : ''}
            </div>
            <div class="nested-reply-text">${nestedReply.text}</div>
            <div class="nested-reply-actions">
                <span class="like-nested-reply-btn" data-parent-id="${parentId}" data-reply-id="${replyId}" data-nested-reply-id="${nestedReply.id}">👍 ${nestedReply.likes || 0}</span>
            </div>
        </div>
    `).join('');
}

// 📅 تنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));

    if (diffMinutes < 1) {
        return 'الآن';
    } else if (diffMinutes < 60) {
        return `قبل ${diffMinutes} دقيقة`;
    } else if (diffHours < 24) {
        return `قبل ${diffHours} ساعة`;
    } else if (diffDays < 7) {
        return `قبل ${diffDays} يوم`;
    } else {
        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// 🧠 إضافة الأحداث بعد توليد HTML
function attachReviewEvents() {
    // إعجاب للتعليقات الرئيسية
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const review = reviews.find(r => r.id === id);
            if (review) {
                review.likes = (review.likes || 0) + 1;
                saveReviews();
                renderReviews();
            }
        });
    });

    // إعجاب للردود
    document.querySelectorAll(".like-reply-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const parentId = parseInt(btn.dataset.parentId);
            const replyId = parseInt(btn.dataset.replyId);
            const review = reviews.find(r => r.id === parentId);
            
            if (review && review.replies) {
                const reply = findReplyById(review.replies, replyId);
                if (reply) {
                    reply.likes = (reply.likes || 0) + 1;
                    saveReviews();
                    renderReviews();
                }
            }
        });
    });

    // إعجاب للردود المتداخلة
    document.querySelectorAll(".like-nested-reply-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const parentId = parseInt(btn.dataset.parentId);
            const replyId = parseInt(btn.dataset.replyId);
            const nestedReplyId = parseInt(btn.dataset.nestedReplyId);
            const review = reviews.find(r => r.id === parentId);
            
            if (review && review.replies) {
                const reply = findReplyById(review.replies, replyId);
                if (reply && reply.replies) {
                    const nestedReply = findReplyById(reply.replies, nestedReplyId);
                    if (nestedReply) {
                        nestedReply.likes = (nestedReply.likes || 0) + 1;
                        saveReviews();
                        renderReviews();
                    }
                }
            }
        });
    });

    // فتح نموذج الرد على التعليق الرئيسي
    document.querySelectorAll(".reply-btn").forEach(btn => {
        btn.addEventListener("click", () => openReplyForm(btn.dataset.id, null, null));
    });

    // فتح نموذج الرد على الردود
    document.querySelectorAll(".reply-to-reply-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const parentId = parseInt(btn.dataset.parentId);
            const replyId = parseInt(btn.dataset.replyId);
            openReplyForm(parentId, replyId, null);
        });
    });

    // ترجمة تعليق رئيسي
    document.querySelectorAll(".translate-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            const id = parseInt(btn.dataset.id);
            const review = reviews.find(r => r.id === id);
            if (review) {
                const translated = await translateText(review.text);
                showToast(translated);
            }
        });
    });

    // حذف التعليق الرئيسي (للمشرف)
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            deleteReview(id);
        });
    });

    // حذف الردود (للمشرف)
    document.querySelectorAll(".delete-reply-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const parentId = parseInt(btn.dataset.parentId);
            const replyId = parseInt(btn.dataset.replyId);
            deleteReply(parentId, replyId);
        });
    });

    // حذف الردود المتداخلة (للمشرف)
    document.querySelectorAll(".delete-nested-reply-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const parentId = parseInt(btn.dataset.parentId);
            const replyId = parseInt(btn.dataset.replyId);
            const nestedReplyId = parseInt(btn.dataset.nestedReplyId);
            deleteNestedReply(parentId, replyId, nestedReplyId);
        });
    });
}

// 🗑️ حذف التعليق الرئيسي
function deleteReview(id) {
    if (!isAdmin) return;
    if (confirm('هل تريد حذف هذا التعليق؟')) {
        reviews = reviews.filter(r => r.id !== id);
        saveReviews();
        renderReviews();
        showToast("🗑️ تم حذف التعليق");
    }
}

// 🗑️ حذف الرد
function deleteReply(parentId, replyId) {
    if (!isAdmin) return;
    if (confirm('هل تريد حذف هذا الرد؟')) {
        const review = reviews.find(r => r.id === parentId);
        if (review && review.replies) {
            review.replies = review.replies.filter(reply => reply.id !== replyId);
            saveReviews();
            renderReviews();
            showToast("🗑️ تم حذف الرد");
        }
    }
}

// 🗑️ حذف الرد المتداخل
function deleteNestedReply(parentId, replyId, nestedReplyId) {
    if (!isAdmin) return;
    if (confirm('هل تريد حذف هذا الرد؟')) {
        const review = reviews.find(r => r.id === parentId);
        if (review && review.replies) {
            const reply = findReplyById(review.replies, replyId);
            if (reply && reply.replies) {
                reply.replies = reply.replies.filter(nestedReply => nestedReply.id !== nestedReplyId);
                saveReviews();
                renderReviews();
                showToast("🗑️ تم حذف الرد");
            }
        }
    }
}

// 📝 نموذج الرد (يعمل للتعليقات الرئيسية والردود)
function openReplyForm(parentId, replyId, nestedReplyId) {
    let targetContainer;
    let targetElement;
    
    if (nestedReplyId) {
        // رد على رد متداخل
        targetElement = document.querySelector(`[data-nested-reply-id="${nestedReplyId}"]`);
        if (targetElement) {
            targetContainer = targetElement.querySelector('.nested-reply-actions') || targetElement;
        }
    } else if (replyId) {
        // رد على رد عادي
        targetElement = document.querySelector(`[data-reply-id="${replyId}"]`);
        if (targetElement) {
            targetContainer = targetElement.querySelector('.reply-actions') || targetElement;
        }
    } else {
        // رد على تعليق رئيسي
        targetContainer = document.getElementById(`replies-${parentId}`);
    }
    
    if (!targetContainer || targetContainer.querySelector(".reply-form")) return;

    const form = document.createElement("div");
    form.className = "reply-form";
    form.innerHTML = `
        <input type="text" placeholder="الاسم" class="reply-name-input" required>
        <textarea placeholder="اكتب ردك هنا..." class="reply-text-input" required></textarea>
        <div class="reply-form-actions">
            <button type="button" class="submit-reply-btn">إرسال الرد</button>
            <button type="button" class="cancel-reply-btn">إلغاء</button>
        </div>
    `;
    
    // إدراج النموذج بعد العنصر المستهدف
    if (targetElement) {
        targetElement.after(form);
    } else {
        targetContainer.appendChild(form);
    }

    const nameInput = form.querySelector(".reply-name-input");
    const textInput = form.querySelector(".reply-text-input");
    const sendBtn = form.querySelector(".submit-reply-btn");
    const cancelBtn = form.querySelector(".cancel-reply-btn");

    sendBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
        if (!name || !text) {
            showToast("⚠️ يرجى ملء جميع الحقول");
            return;
        }

        const review = reviews.find(r => r.id === parseInt(parentId));
        if (review) {
            const newReply = {
                id: Date.now(),
                name,
                text,
                likes: 0,
                replies: [],
                date: new Date().toISOString(),
                timestamp: Date.now()
            };

            if (nestedReplyId) {
                // إضافة رد متداخل
                const parentReply = findReplyById(review.replies, replyId);
                if (parentReply) {
                    if (!parentReply.replies) parentReply.replies = [];
                    parentReply.replies.push(newReply);
                }
            } else if (replyId) {
                // إضافة رد على رد
                const parentReply = findReplyById(review.replies, replyId);
                if (parentReply) {
                    if (!parentReply.replies) parentReply.replies = [];
                    parentReply.replies.push(newReply);
                }
            } else {
                // إضافة رد على تعليق رئيسي
                if (!review.replies) review.replies = [];
                review.replies.push(newReply);
            }

            saveReviews();
            renderReviews();
            showToast("✅ تم إرسال الرد بنجاح");
        }
    });

    cancelBtn.addEventListener("click", () => {
        form.remove();
    });
}

// 🔍 البحث عن رد بواسطة ID
function findReplyById(replies, id) {
    for (const reply of replies) {
        if (reply.id === id) return reply;
        if (reply.replies) {
            const found = findReplyById(reply.replies, id);
            if (found) return found;
        }
    }
    return null;
}

// 📈 تحميل المزيد من التعليقات
function loadMoreReviews() {
    visibleReviews += 5; // زيادة عدد التعليقات المرئية
    if (visibleReviews >= reviews.length) {
        visibleReviews = reviews.length;
    }
    renderReviews();
}

// 🌐 ترجمة نص تجريبية
async function translateText(text) {
    const lang = document.documentElement.lang || "ar";
    if (lang === "ar") return "[EN] " + text;
    if (lang === "en") return "[AR] " + text;
    if (lang === "de") return "[DE] " + text;
    return text;
}

// 🟡 رسائل منبثقة
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 🛡️ رمز المشرف (يمكنك تغييره لأي شيء سري)
const ADMIN_PASSWORD = "12345"; 
let isAdmin = false;

// 🧠 التحقق عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
        isAdmin = true;
    }
    renderAdminUI();
});

// 🧠 دالة إظهار واجهة المشرف
function renderAdminUI() {
    // ✅ إظهار أزرار الحذف فقط إذا كان المشرف مسجل دخول
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.style.display = isAdmin ? "inline-block" : "none";
    });

    // ✅ إنشاء زر تسجيل الخروج للمشرف
    let logoutBtn = document.getElementById("adminLogout");
    if (isAdmin && !logoutBtn) {
        logoutBtn = document.createElement("button");
        logoutBtn.id = "adminLogout";
        logoutBtn.textContent = "🚪 تسجيل خروج المشرف";
        logoutBtn.style.position = "fixed";
        logoutBtn.style.bottom = "20px";
        logoutBtn.style.left = "20px";
        logoutBtn.style.zIndex = "9999";
        logoutBtn.style.padding = "10px 15px";
        logoutBtn.style.backgroundColor = "#c0392b";
        logoutBtn.style.color = "#fff";
        logoutBtn.style.border = "none";
        logoutBtn.style.borderRadius = "5px";
        logoutBtn.style.cursor = "pointer";
        document.body.appendChild(logoutBtn);

        logoutBtn.addEventListener("click", () => {
            isAdmin = false;
            localStorage.removeItem("isAdmin");
            logoutBtn.remove();
            renderReviews();
        });
    }
}

// 🧠 زر دخول المشرف - يظهر تلقائيًا إذا لم تكن مشرفًا
window.addEventListener("DOMContentLoaded", () => {
    if (!isAdmin) {
        const adminLoginBtn = document.createElement("button");
        adminLoginBtn.id = "adminLogin";
        adminLoginBtn.textContent = "🔐 دخول المشرف";
        adminLoginBtn.style.position = "fixed";
        adminLoginBtn.style.bottom = "20px";
        adminLoginBtn.style.left = "20px";
        adminLoginBtn.style.zIndex = "9999";
        adminLoginBtn.style.padding = "10px 15px";
        adminLoginBtn.style.backgroundColor = "#2980b9";
        adminLoginBtn.style.color = "#fff";
        adminLoginBtn.style.border = "none";
        adminLoginBtn.style.borderRadius = "5px";
        adminLoginBtn.style.cursor = "pointer";
        document.body.appendChild(adminLoginBtn);

        adminLoginBtn.addEventListener("click", () => {
            const entered = prompt("🛡️ أدخل رمز المشرف:");
            if (entered === ADMIN_PASSWORD) {
                isAdmin = true;
                localStorage.setItem("isAdmin", "true");
                adminLoginBtn.remove();
                renderReviews();
                showToast("✅ تم تسجيل دخول المشرف");
            } else {
                showToast("❌ الرمز غير صحيح");
            }
        });
    }
});

// 📥 تحميل التعليقات عند بدء التشغيل
window.addEventListener("DOMContentLoaded", () => {
    loadReviews(); // ✅ تحميل التعليقات من localStorage
    renderReviews(); // ✅ عرض التعليقات المحملة
});

