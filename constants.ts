
import { Service, TeamMember, Publication, Client, TherapeuticArea } from './types';

// --- English Data ---
const COMPANY_INFO_EN = {
  name: "NDNEX",
  tagline: "Evidence and Next Solution",
  description: "Specialized firm providing value assessment, market access, and market analysis services for healthcare technologies.",
  address: "3F, 462, Bongeunsa-ro, Gangnam-gu, Seoul, 06154",
  phone: "02-568-1555",
  email: "info@ndnex.com",
  contactPersonEmail: "hyemin.ku@ndnex.com",
  mission: "Enhancing Patient Access to Treatment. We aim to expand healthcare coverage and ultimately increase patient access to treatment.",
  vision: "Customized Integrated Solutions. We provide tailored solutions that respond to changes in the healthcare paradigm with reliable evidence generation."
};

const SERVICES_EN: Service[] = [
  {
    id: 'market-access',
    title: 'Market Access Consulting',
    description: "Expert consulting for effective and efficient market entry of healthcare technologies.",
    longDescription: "Navigating the complex reimbursement landscape in Korea requires a strategic approach grounded in deep regulatory knowledge. Our Market Access Consulting service provides end-to-end support, from early-stage feasibility checks to final pricing negotiations. We develop compelling value stories that align with payer priorities, ensuring your innovation is recognized and rewarded. Whether for new drug listings or expanding coverage indications, we provide the strategic insight needed to overcome barriers to entry.",
    iconName: 'Globe',
    features: [
      "Value Identification and Value Story Development",
      "Pricing Feasibility Check",
      "Value Dossier and associated support",
      "Pricing and Market Access Strategy",
      "HTA (Health Technology Assessment)",
      "Reimbursement Policy Insight",
      "Re-evaluation of Benefit Adequacy"
    ]
  },
  {
    id: 'heor',
    title: 'HEOR',
    description: "Scientific, systematic, and comprehensive value assessment of efficacy, safety, and cost-effectiveness.",
    longDescription: "In an era of value-based healthcare, robust economic evidence is essential. NDNEX specializes in rigorous Health Economics and Outcomes Research (HEOR) that meets the high standards of HIRA and global HTA bodies. We employ advanced methodologies, including Matching-adjusted Indirect Comparisons (MAIC) and Network Meta-Analyses (NMA), to synthesize evidence even when head-to-head trials are unavailable. Our economic models (CEA, BIM) are built to be transparent, adaptable, and persuasive, demonstrating the clear cost-effectiveness of your technology.",
    iconName: 'BarChart',
    features: [
      "Matching-adjusted Indirect Comparison (MAIC) & Network Meta-Analysis (NMA)",
      "Cost-Effectiveness Analysis (CEA) & Decision Modeling",
      "Budget Impact Analysis (BIA)",
      "Systematic Literature Review (SLR) & Meta-Analysis",
      "Economic Burden & Uncertainty Analysis",
      "PRO (Patient reported outcome) & Utility Assessment"
    ]
  },
  {
    id: 'rwe',
    title: 'Real World Evidence (RWE)',
    description: "Generating real-world data evidence for regulatory and reimbursement decision-making.",
    longDescription: "Clinical trials often do not capture the full picture of a treatment's performance in routine practice. Our Real World Evidence (RWE) services bridge this gap by leveraging retrospective data to generate evidence that supports regulatory approvals, reimbursement decisions, and post-market safety monitoring. We design and execute high-quality chart review studies and database analyses that reflect the actual patient journey and treatment patterns in Korea, providing the 'real-world' proof payers demand.",
    iconName: 'Database',
    features: [
      "Epidemiology & Retrospective Database Studies",
      "Administrative and Healthcare Claims Analysis",
      "Medical Chart Review Studies",
      "Patient or Physician Surveys",
      "Publication support based on findings"
    ]
  },
  {
    id: 'big-data',
    title: 'Big Data Analytics',
    description: "Market analysis big data platform providing representative results using national health insurance claims data.",
    longDescription: "Speed and representativeness are critical in a rapidly changing market. Our proprietary Big Data Analytics platform utilizes vast datasets from the National Health Insurance Service (NHIS) and Health Insurance Review & Assessment Service (HIRA). We provide rapid, representative insights into disease prevalence, patient demographics, and healthcare resource utilization. This data-driven approach allows clients to anticipate market shifts and tailor their strategies with precision based on the entire Korean population.",
    iconName: 'Server',
    features: [
      "Rapid analysis turnaround",
      "Representative national data (HIRA, NHIS)",
      "Platform-based diverse data provision",
      "Response to rapidly changing market environments"
    ]
  }
];

const DIRECTOR_EN: TeamMember = {
  name: "Hyemin Ku, Ph.D.",
  role: "CEO",
  education: [], 
  experience: [
    "Over 21 years of comprehensive healthcare industry expertise.",
    "Successfully led market access strategies for innovative new drugs, including World's First HTA products.",
    "Proven track record of achieving reimbursement in complex therapeutic areas through creative evidence generation.",
    "Author of 12 peer-reviewed articles."
  ]
};

const THERAPEUTIC_AREAS_EN: TherapeuticArea[] = [
  {
    category: "Oncology: Solid Tumors",
    diseases: [
      "Biliary Tract Cancer", "Breast Cancer", "Cervical Cancer", "Colorectal Cancer",
      "Esophageal Squamous-Cell Carcinoma", "Gastric Cancer", "Glioma", "Head and Neck Cancer",
      "Hepatocellular Carcinoma", "Melanoma", "Metastatic Castration-Resistant Prostate Cancer",
      "Non-Small Cell Lung Cancer", "Ovarian Cancer", "Prostate Cancer", "Renal Cell Carcinoma",
      "Small-cell Lung Cancer", "Tenosynovial Giant Cell Tumor", "Urothelial Carcinoma"
    ]
  },
  {
    category: "Oncology: Hematologic Malignancies",
    diseases: [
      "Acute Lymphoblastic Leukemia", "Acute Myeloid Leukemia", "AL Amyloidosis", "Chronic Myeloid Leukemia",
      "Cutaneous T-Cell Lymphoma", "Diffuse Large B-Cell Lymphoma", "Hodgkin Lymphoma", "Multiple Myeloma",
      "Mycosis Fungoides and Sézary Syndrome", "Myeloproliferative Neoplasm", "Polycythemia Vera"
    ]
  },
  {
    category: "Endocrinology & Metabolism",
    diseases: [
      "Diabetes Mellitus", "Hyperlipidemia", "Short Bowel Syndrome", "X-linked Hypophosphatemia (XLH)"
    ]
  },
  {
    category: "Cardiovascular",
    diseases: [
      "Cardiomyopathy", "Heart Failure", "Transthyretin Amyloid Cardiomyopathy"
    ]
  },
  {
    category: "Neurology",
    diseases: [
      "Epilepsy", "Multiple Sclerosis", "Neuromyelitis Optica Spectrum Disorder",
      "Parkinson’s Disease", "Spinal Muscular Atrophy", "Tardive Dyskinesia"
    ]
  },
  {
    category: "Dermatology & Allergy",
    diseases: [
      "Alopecia Areata", "Atopic Dermatitis", "Psoriasis", "Prurigo Nodularis"
    ]
  },
  {
    category: "Gastroenterology & Hepatology",
    diseases: [
      "Constipation", "Gastritis", "Non-Erosive Reflux Disease", "Primary Biliary Cholangitis"
    ]
  },
  {
    category: "Hematology & Infectious",
    diseases: [
      "Aplastic Anemia", "Covid-19", "Graft-versus-host Disease (GVHD)", "MRSA"
    ]
  },
  {
    category: "Musculoskeletal & Others",
    diseases: [
      "Osteoarthritis", "Osteoporosis", "Rheumatoid Arthritis", "Benign Prostatic Hyperplasia (BPH)",
      "CAPS/Periodic Fever Syndrome", "Dry Eye", "Eye Conjunctivitis", "Glaucoma", "Hereditary Angioedema"
    ]
  }
];

// --- Korean Data (Professional Mix) ---
const COMPANY_INFO_KO = {
  name: "엔디넥스",
  tagline: "Evidence and Next Solution",
  description: "보건의료기술의 가치평가 및 Market Access, 시장분석 서비스를 제공하는 헬스케어 전문 컨설팅 기업입니다.",
  address: "서울시 강남구 봉은사로 462, 3층 (우 06154)",
  phone: "02-568-1555",
  email: "info@ndnex.com",
  contactPersonEmail: "hyemin.ku@ndnex.com",
  mission: "환자의 치료접근성 강화 (Enhancing Patient Access). 헬스케어 보장성을 확대하여 환자들이 필요한 치료에 한 걸음 더 가까이 다가갈 수 있도록 기여합니다.",
  vision: "고객 맞춤형 통합 솔루션 (Customized Integrated Solutions). 엔디넥스는 신뢰할 수 있는 근거(Evidence)를 기반으로, 변화하는 보건의료 패러다임에 최적화된 고객 맞춤형 통합 솔루션을 제공합니다."
};

const SERVICES_KO: Service[] = [
  {
    id: 'market-access',
    title: 'Market Access Consulting',
    description: "신의료기술 및 약제의 효율적인 시장 진입을 위한 전문 Market Access 컨설팅",
    longDescription: "국내 급여 환경의 복잡성을 극복하기 위해서는 규제에 대한 깊은 이해와 정교한 전략이 필수적입니다. NDNEX는 초기 타당성 검토(Feasibility Check)부터 약가 협상 및 등재까지 전 주기에 걸친 맞춤형 컨설팅을 제공합니다. 보험 당국의 니즈를 꿰뚫는 Value Story를 개발하여 혁신 기술의 가치를 극대화하고, 시장 진입의 장벽을 넘어설 수 있는 전략적 인사이트를 제시합니다.",
    iconName: 'Globe',
    features: [
      "Value Identification 및 Value Story 개발",
      "약가 타당성 검토 (Pricing Feasibility Check)",
      "급여 등재 신청서(Value Dossier) 작성 및 지원",
      "Pricing & Market Access 전략 수립",
      "의료기술평가 (HTA) 대응",
      "급여 정책 인사이트(Reimbursement Policy Insight) 제공",
      "급여 적정성 재평가 대응"
    ]
  },
  {
    id: 'heor',
    title: 'HEOR',
    description: "임상적 유용성과 비용효과성을 입증하는 과학적이고 체계적인 가치 평가",
    longDescription: "가치 기반 헬스케어(Value-based Healthcare) 시대, 체계적인 근거는 선택이 아닌 필수입니다.. NDNEX는 심평원(HIRA) 및 글로벌 가이드라인을 준수하는 엄격한 HEOR 연구를 수행합니다. 직접 비교 임상이 부재한 경우에도 MAIC, NMA 등 고도화된 방법론을 활용해 근거를 통합하고, 투명하고 설득력 있는 경제성 평가 모델(CEA, BIM)을 구축하여 비용효과성을 입증합니다.",
    iconName: 'BarChart',
    features: [
      "Matching-adjusted Indirect Comparison (MAIC) & NMA",
      "비용 효과 분석(CEA) & 의사결정 모델링",
      "재정 영향 분석(Budget Impact Analysis)",
      "체계적 문헌 고찰(SLR) & 메타 분석",
      "Economic Burden 및 불확실성 분석",
      "PRO (Patient reported outcome) & Utility Assessment"
    ]
  },
  {
    id: 'rwe',
    title: 'Real World Evidence (RWE)',
    description: "인허가 및 급여 의사결정을 지원하는 실제 임상 데이터(RWD) 근거 창출",
    longDescription: "통제된 임상시험 환경과 실제 진료 현장 간의 간극을 메우기 위해 RWE(Real World Evidence)의 중요성이 커지고 있습니다. 우리는 후향적 데이터 분석 및 차트 리뷰(Chart Review)를 통해 허가, 급여 등재, 시판 후 안전성 관리에 필요한 실제 임상 근거를 생성합니다. 한국의 실제 환자 여정(Patient Journey)과 치료 패턴을 반영한 고품질 연구를 통해 보험 당국이 신뢰할 수 있는 근거를 마련합니다.",
    iconName: 'Database',
    features: [
      "역학(Epidemiology) 및 후향적 데이터베이스 연구",
      "청구자료 및 행정 데이터 분석",
      "의무기록 검토 연구 (Chart Review)",
      "환자 및 의료진 설문조사 (Survey)",
      "연구 결과 기반 논문 게재(Publication) 지원"
    ]
  },
  {
    id: 'big-data',
    title: 'Big Data Analytics',
    description: "전국민 건강보험 청구자료를 활용한 시장분석 빅데이터 플랫폼",
    longDescription: "시장의 흐름을 읽기 위해서는 속도와 대표성이 관건입니다. NDNEX는 건강보험심사평가원(HIRA) 및 국민건강보험공단(NHIS)의 전수 데이터를 분석하여 질병의 유병률, 환자 특성, 의료 자원 이용 현황에 대한 신속하고 정확한 인사이트를 제공합니다. 이러한 데이터 기반 접근은 시장 변화를 선제적으로 예측하고 정교한 전략을 수립하는 토대가 됩니다.",
    iconName: 'Server',
    features: [
      "신속한 분석 결과(Rapid Turnaround) 제공",
      "대표성 있는 전국민 데이터 활용 (HIRA, NHIS)",
      "플랫폼 기반의 다양한 데이터 제공",
      "급변하는 시장 환경에 대한 빠른 대응"
    ]
  }
];

const DIRECTOR_KO: TeamMember = {
  name: "구혜민 대표 (Ph.D.)",
  role: "CEO",
  education: [], 
  experience: [
    "21년 이상의 포괄적인 헬스케어 산업 전문성 보유",
    "세계 최초 HTA 제품을 포함한 혁신 신약의 시장 진입 전략 성공적 주도",
    "창의적인 근거 생성을 통해 복잡한 치료 영역에서의 급여 달성 성과 입증",
    "12편의 동료 심사(Peer-reviewed) 논문 저자"
  ]
};

const THERAPEUTIC_AREAS_KO: TherapeuticArea[] = [
  {
    category: "Oncology: Solid Tumors",
    diseases: [
      "담도암", "유방암", "자궁경부암", "대장암",
      "식도 편평세포암", "위암", "신경교종", "두경부암",
      "간세포암", "흑색종", "전이성 거세저항성 전립선암",
      "비소세포폐암", "난소암", "전립선암", "신세포암",
      "소세포폐암", "건활막 거대세포종", "요로상피암"
    ]
  },
  {
    category: "Oncology: Hematologic Malignancies",
    diseases: [
      "급성 림프구성 백혈병", "급성 골수성 백혈병", "AL 아밀로이드증", "만성 골수성 백혈병",
      "피부 T세포 림프종", "미만성 거대 B세포 림프종", "호지킨 림프종", "다발성 골수종",
      "균상식육종 및 세자리증후군", "골수증식종양", "진성 적혈구증가증"
    ]
  },
  {
    category: "Endocrinology & Metabolism",
    diseases: [
      "당뇨병", "고지혈증", "단장 증후군", "X염색체 연관 저인산혈증(XLH)"
    ]
  },
  {
    category: "Cardiovascular",
    diseases: [
      "심근병증", "심부전", "트랜스티레틴 아밀로이드 심근병증"
    ]
  },
  {
    category: "Neurology",
    diseases: [
      "뇌전증", "다발성 경화증", "시신경 척수염 범주 질환",
      "파킨슨병", "척수성 근위축증", "지연성 운동장애"
    ]
  },
  {
    category: "Dermatology & Allergy",
    diseases: [
      "원형 탈모증", "아토피 피부염", "건선", "결절성 양진"
    ]
  },
  {
    category: "Gastroenterology & Hepatology",
    diseases: [
      "변비", "위염", "비미란성 역류 질환", "원발성 담즙성 담관염"
    ]
  },
  {
    category: "Hematology & Infectious",
    diseases: [
      "재생불량성 빈혈", "코로나19", "이식편대숙주질환(GVHD)", "MRSA(메티실린 내성 황색포도알균)"
    ]
  },
  {
    category: "Musculoskeletal & Others",
    diseases: [
      "골관절염", "골다공증", "류마티스 관절염", "양성 전립선 비대증(BPH)",
      "CAPS/주기적 발열 증후군", "안구건조증", "결막염", "녹내장", "유전성 혈관부종"
    ]
  }
];

// --- UI Strings ---
export const UI_TEXT = {
  en: {
    heroBadge: "Evidence-Based Healthcare Solutions",
    heroTitlePrefix: "Scientific Rigor Meets",
    heroTitleHighlight: "Healthcare Value",
    heroDescription: "NDNEX bridges the gap between clinical data and reimbursement success. We provide world-class HEOR, Market Access, and Data Analytics to secure patient access.",
    exploreServices: "Explore Services",
    viewExperience: "View Experience",
    whyNdnex: "Why NDNEX",
    whyTitlePrefix: "Bridging the gap between",
    whyTitleHighlight1: "Innovation",
    whyTitleHighlight2: "Access",
    whyDescription: "In a rapidly evolving healthcare landscape, data is only as valuable as the insights it generates. We combine deep scientific expertise with strategic market understanding to build compelling value stories that resonate with payers and policymakers.",
    evidenceGeneration: "Evidence Generation",
    evidenceDesc: "Robust methodologies ensuring regulatory and reimbursement success through data-driven insights.",
    learnMission: "Learn about our Mission",
    learnMore: "Learn More",
    ourClients: "Our Clients",
    clientsDesc: "Trusted by over 60 industry leaders in biopharma and medtech to solve their most complex challenges.",
    viewSuccess: "View Success Stories",
    readyTitle: "Ready to demonstrate value?",
    readyDesc: "Contact our team of experts to discuss your specific Market Access and HEOR needs. We are ready to partner with you.",
    startConversation: "Start a Conversation",
    philosophy: "Our Philosophy",
    philosophyTitle: "Bridging Science & Strategy",
    philosophyDesc: "Our core values drive every project, ensuring we deliver not just data, but actionable pathways to market success.",
    vision: "VISION",
    mission: "MISSION",
    leadership: "Leadership",
    leadershipDesc: "Driven by a passion for healthcare innovation and equitable patient access.",
    leadershipQuote: "Our goal is to build the bridge between medical innovation and the patients who need it most.",
    professionalBackground: "Professional Background",
    expertise: "Our Expertise",
    comprehensive: "Comprehensive",
    solutions: "Solutions",
    solutionsDesc: "From regulatory strategy to complex economic modeling, we provide the end-to-end evidence generation required for successful market access.",
    serviceMenu: "Service Menu",
    needProposal: "Need a proposal?",
    proposalDesc: "Get a customized plan for your specific product needs.",
    contactUs: "Contact Us",
    strategicValue: "Strategic Value",
    keyCapabilities: "Key Deliverables & Capabilities",
    consultOn: "Consult on",
    inquireAbout: "Inquire about this",
    deepExpertise: "Deep Expertise",
    therapeuticAreas: "Therapeutic Areas",
    selectedPublications: "Selected Publications",
    readArticle: "Read Article",
    getInTouch: "Get in Touch",
    contactDesc: "Interested in our services or have a question? Reach out to our team directly.",
    visitUs: "Visit Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    sendMessage: "Send a Message",
    replyTime: "We usually reply within 24 hours.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sending: "Sending",
    send: "Send Message",
    successTitle: "Message Sent Successfully!",
    successDesc: "We'll get back to you shortly.",
    error: "Failed to send. Please check permissions or email us directly.",
    thinking: "Thinking...",
    askAi: "Ask AI",
    aiGreeting: "Hello! I'm the NDNEX AI Assistant. Ask me about our HEOR services, experience, or publications.",
    aiError: "Sorry, something went wrong. Please try again.",
    aiDisclaimer: "Powered by Gemini 2.5",
    experienceTitle: "Experience & \nPublications",
    experienceDesc: "A track record of successful reimbursement submissions and impactful research publications."
  },
  ko: {
    heroBadge: "Evidence-Based Healthcare Solutions",
    heroTitlePrefix: "Scientific Rigor Meets",
    heroTitleHighlight: "Healthcare Value",
    heroDescription: "엔디넥스는 헬스케어 가치를 성공적인 급여 등재로 이어주는 전문 파트너입니다. 환자의 치료 접근성 향상을 목표로, 세계적 수준의 HEOR와 Market Access 역량을 기반으로 한 데이터 기반 전략 솔루션을 제공합니다.",
    exploreServices: "Explore Services",
    viewExperience: "View Experience",
    whyNdnex: "Why NDNEX",
    whyTitlePrefix: "Bridging the gap between",
    whyTitleHighlight1: "Innovation",
    whyTitleHighlight2: "Access",
    whyDescription: "급변하는 헬스케어 환경에서 데이터는 전략적 인사이트와 결합될 때 비로소 진정한 가치를 발휘합니다.\n엔디넥스는 깊이 있는 과학적 전문성과 시장에 대한 예리한 통찰을 바탕으로, 주요 의사결정권자를 설득할 수 있는 강력한 Value Story를 구축합니다.",
    evidenceGeneration: "Evidence Generation",
    evidenceDesc: "데이터 기반 통찰력을 통해 규제 및 급여 성공을 보장하는 강력한 방법론.",
    learnMission: "Learn about our Mission",
    learnMore: "Learn More",
    ourClients: "Our Clients",
    clientsDesc: "국내외 60개 이상의 제약·바이오 및 의료기기 선도 기업이\n복잡한 시장 진입과 가치 입증 과제를 해결하는 파트너로 엔디넥스를 신뢰합니다.",
    viewSuccess: "View Success Stories",
    readyTitle: "Ready to demonstrate value?",
    readyDesc: "귀사의 Market Access 및 HEOR 과제를 함께 논의하고 싶으시다면 엔디넥스 전문가 팀에 문의해 주십시오. 엔디넥스는 신뢰할 수 있는 파트너로 함께하겠습니다.",
    startConversation: "Start a Conversation",
    philosophy: "Our Philosophy",
    philosophyTitle: "Bridging Science & Strategy",
    philosophyDesc: "엔디넥스의 핵심 가치는 모든 프로젝트를 움직이는 힘입니다. 엔디넥스는 단순한 데이터가 아니라, 시장 성공으로 이어지는 실행 가능한 전략을 제시합니다.",
    vision: "VISION",
    mission: "MISSION",
    leadership: "Leadership",
    leadershipDesc: "헬스케어 혁신과 환자의 치료 기회 확대를 위한 끊임없는 열정.",
    leadershipQuote: "의료 혁신이 치료가 가장 필요한 환자들에게 실제 치료 옵션으로 이어지도록 하는 것이 우리의 목표입니다.",
    professionalBackground: "Professional Background",
    expertise: "Our Expertise",
    comprehensive: "Comprehensive",
    solutions: "Solutions",
    solutionsDesc: "규제 전략부터 복잡한 경제성 모델링까지, 성공적인 시장 진입에 필요한 End-to-End 근거 창출 서비스를 제공합니다.",
    serviceMenu: "Service Menu",
    needProposal: "Need a proposal?",
    proposalDesc: "귀사의 제품에 딱 맞는 맞춤형 계획을 받아보세요.",
    contactUs: "Contact Us",
    strategicValue: "Strategic Value",
    keyCapabilities: "Key Deliverables & Capabilities",
    consultOn: "Consult on",
    inquireAbout: "Inquire about this",
    deepExpertise: "Deep Expertise",
    therapeuticAreas: "Therapeutic Areas",
    selectedPublications: "Selected Publications",
    readArticle: "Read Article",
    getInTouch: "Get in Touch",
    contactDesc: "서비스에 관심이 있거나 질문이 있으신가요? NDNEX 팀에게 직접 문의해주세요.",
    visitUs: "Visit Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    sendMessage: "Send a Message",
    replyTime: "보통 24시간 이내에 답변 드립니다.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sending: "Sending...",
    send: "Send Message",
    successTitle: "Message Sent Successfully!",
    successDesc: "빠른 시일 내에 회신 드리겠습니다.",
    error: "전송에 실패했습니다. 이메일로 직접 문의해주세요.",
    thinking: "Thinking...",
    askAi: "Ask AI",
    aiGreeting: "안녕하세요! 엔디넥스 AI 어시스턴트입니다. HEOR 서비스, 경력, 논문 등에 대해 물어보세요.",
    aiError: "죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.",
    aiDisclaimer: "Powered by Gemini 2.5",
    experienceTitle: "Experience & \nPublications",
    experienceDesc: "성공적인 급여 등재와 영향력 있는 연구 논문 출판 기록."
  }
};

// Shared Data (Language Independent)
const getLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;

export const PUBLICATIONS: Publication[] = [
  {
    title: "Health State Utility Associated with Parenteral Nutrition Requirement in Patients with Short Bowel Syndrome and Intestinal Failure in Korea: A Vignette-Based Approach",
    journal: "Nutrients",
    year: "2025",
    authors: "Hyewon Sim, Jin Soo Moon, Young Suk Park, Eunji Heo, Yoon Soo Chun, Songhwa Choi, Hyemin Ku, Jae Hee Chung",
    link: "https://www.mdpi.com/2072-6643/17/22/3551"
  },
  {
    title: "Cost-effectiveness analysis of dupilumab among patients with uncontrolled severe asthma using LIBERTY ASTHMA QUEST Korean data",
    journal: "Health Economics Review",
    year: "2024",
    authors: "Sung-Hee Oh, Chin Kook Rhee, Eun Jin Bae & Hyemin Ku (Corresponding)",
    link: "https://healtheconomicsreview.biomedcentral.com/articles/10.1186/s13561-024-00532-4"
  },
  {
    title: "Cost-consequence analysis of continuous denosumab therapy for osteoporosis treatment in South Korea",
    journal: "BMC Musculoskeletal Disorders",
    year: "2024",
    authors: "Seungju Cha, Hyemin Ku (Corresponding), et al.",
    link: "https://bmcmusculoskeletdisord.biomedcentral.com/articles/10.1186/s12891-024-07185-8"
  },
  {
    title: "Prevalence and socioeconomic burden of diabetes mellitus in South Korea adults: a population-based study using administrative data",
    journal: "BMC Public Health",
    year: "2021",
    authors: "Sung-Hee Oh, Hyemin Ku & Kang Seo Park",
    link: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10450-3"
  },
  {
    title: "Estimation of Health Utilities Based on the Response to Treatment in Atopic Dermatitis: a Population-based Study",
    journal: "Clinical Therapeutics",
    year: "2019",
    authors: "Hyun Jin Song, Hyemin Park, Sun-Young Park, Eui-Kyung Lee, So-Young Ha, Se-Young Park, Eun-Jin Bae, Hyemin Ku",
    link: "https://www.sciencedirect.com/science/article/pii/S0149291819300670"
  }
];

export const CLIENTS: Client[] = [
  { 
    name: "Ahn-Gook", 
    logo: "https://www.awonder.co.kr/shopimages/ahngookthc/all_og__20250611165401phpFY489X.jpg",
    link: "https://www.ahn-gook.com/" 
  },
  { name: "Amgen", logo: "https://logos-world.net/wp-content/uploads/2023/06/Amgen-Logo.jpg", link: "https://www.amgen.co.kr/" },
  { name: "Astellas", logo: getLogo("astellas.com"), link: "https://www.astellas.com/kr/" },
  { name: "AstraZeneca", logo: getLogo("astrazeneca.com"), link: "https://www.astrazeneca.co.kr/" },
  { 
    name: "BeOne", 
    logo: "https://cdn.cookielaw.org/logos/51fa3978-59cb-4e5a-8700-81a96d2641f1/01959608-9da4-7326-803e-18390b0b228b/e8c3961c-efcf-4274-bdc6-c0749adc1e27/Beone.png", 
    link: "https://beonemedicines.kr/" 
  }, 
  { 
    name: "Binex", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKUe7AGF4_5o92a1W5wNK98oZze9Q9xyVFQ&s", 
    link: "http://www.bi-nex.com/" 
  },
  { 
    name: "Biogen", 
    logo: "https://kr.biogen.com/content/dam/corporate/international/global/en-US/global/OG-images/og_biogen_logo.jpg", 
    link: "https://www.biogen.com/home.html" 
  },
  { name: "Boehringer Ingelheim", logo: getLogo("boehringer-ingelheim.com"), link: "https://www.bikr.co.kr/" },
  { name: "Bristol Myers Squibb", logo: "https://www.bms.com/media/media-library/corporate-resources/bms-logo/_jcr_content/par/subject_copy_copy_co_969178463.respimg.jpg/1731506928883/bms-logo-rgb-pos-with-border.jpg", link: "https://www.bms.com/kr" },
  { name: "Chong Kun Dang", logo: getLogo("ckdpharm.com"), link: "http://www.ckdpharm.com/" },
  { 
    name: "CSL Behring", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMY3huhMI5wFlSO_IDyh3c5atkxl7cb9CVng&s", 
    link: "https://www.cslbehring.co.kr/" 
  },
  { 
    name: "Daewoo", 
    logo: "https://i.ytimg.com/vi/an1DMelQsAk/maxresdefault.jpg", 
    link: "http://www.dwpharm.co.kr/" 
  },
  { name: "Daewoong", logo: getLogo("daewoong.co.kr"), link: "https://www.daewoong.co.kr/" },
  { name: "Daewon", logo: getLogo("daewonpharm.com"), link: "https://www.daewonpharm.com/" },
  { name: "Daiichi-Sankyo", logo: getLogo("daiichisankyo.com"), link: "http://www.daiichisankyo.co.kr/" },
  { name: "Dongkook", logo: getLogo("dkpharm.co.kr"), link: "https://www.dkpharm.co.kr/" },
  { 
    name: "GSK", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSh8MPJ3g3BQc9iv2V6AZ5kckB5LOA0L5D8Q&s", 
    link: "https://kr.gsk.com/" 
  },
  { name: "Guerbet", logo: getLogo("guerbet.com"), link: "https://www.guerbet.com/ko-kr/" },
  { 
    name: "Hana", 
    logo: "https://cdn.pharmnews.com/news/photo/200807/img_38694_6537_36618.jpg", 
    link: "http://www.hanaph.co.kr/index.do" 
  },
  { name: "Handok", logo: getLogo("handok.co.kr"), link: "https://www.handok.co.kr/" },
  { name: "Hanlim", logo: getLogo("hanlim.com"), link: "http://www.hanlim.com/" },
  { name: "Huons", logo: getLogo("huons.com"), link: "http://www.huons.com/" },
  { name: "Hyundai", logo: getLogo("hyundaipharm.co.kr"), link: "http://www.hyundaipharm.co.kr/" },
  { name: "Ipsen", logo: getLogo("ipsen.com"), link: "https://www.ipsen.com/" },
  { name: "Janssen", logo: getLogo("janssen.com"), link: "https://www.janssen.com/korea/" },
  { name: "Jeil", logo: getLogo("jeilpharm.co.kr"), link: "https://www.jeilpharm.co.kr/" },
  { name: "JW", logo: getLogo("jw-pharma.co.kr"), link: "https://www.jw-pharma.co.kr/" },
  { name: "Kukje", logo: getLogo("kukjepharm.co.kr"), link: "http://www.kukjepharm.co.kr/" },
  { 
    name: "Kyowa Kirin", 
    logo: "https://www.kyowakirin.com/media_center/news_releases/2019/images/e20190205_01.png", 
    link: "https://www.kyowakirin.com/kr/" 
  },
  { 
    name: "Lilly", 
    logo: "https://images.seeklogo.com/logo-png/8/3/lilly-logo-png_seeklogo-84218.png", 
    link: "https://www.lilly.co.kr/" 
  },
  { 
    name: "LitePharmTech", 
    logo: "https://logo-resources.thevc.kr/organizations/200x200/153903dd1c2daac632e660e27ad7061f3c9516a6cbcd3cb174f5a5530cdf15ee_1674195948833225.jpg", 
    link: "http://www.litepharm.com/" 
  },
  { name: "Merck", logo: getLogo("merckgroup.com"), link: "https://www.merckgroup.com/kr-ko" }, 
  { 
    name: "Mitsubishi Tanabe", 
    logo: "https://lh4.googleusercontent.com/proxy/ApyTbjXCwmDyUkIxf35xp664fejbNw8B3vUF4Cs_umk_XXjqj5m5ItdYto2g_82CFSdRap-GYXfo6K2zOzhUnab3eA", 
    link: "http://www.mt-pharma-korea.com/" 
  },
  { name: "MSD", logo: getLogo("msd.com"), link: "https://www.msd-korea.com/" },
  { 
    name: "Myungin", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuU8v1hmqs_kqGeI56SHIGga-gnusVg88SA&s", 
    link: "http://myunginph.co.kr/main/ko/index.html" 
  },
  { name: "Myungmoon", logo: getLogo("mmpharm.co.kr"), link: "http://www.mmpharm.co.kr/" },
  { name: "Novartis", logo: getLogo("novartis.com"), link: "https://www.novartis.co.kr/" },
  { name: "Novo Nordisk", logo: getLogo("novonordisk.com"), link: "https://www.novonordisk.co.kr/" },
  { name: "Ono", logo: getLogo("ono-pharma.com"), link: "https://kr.ono-pharma.com/" },
  { 
    name: "Optus", 
    logo: "https://cdn-pro-web-217-134.cdn-nhncommerce.com/optuspharm76_godomall_com/data/commonimg/ico_kr.png", 
    link: "http://optuspharm.com/" 
  },
  { 
    name: "Otsuka", 
    logo: "https://www.otsuka.co.kr/img/user/company/ci_intro.png", 
    link: "http://www.otsuka.co.kr/" 
  },
  { name: "Pfizer", logo: getLogo("pfizer.com"), link: "https://www.pfizer.co.kr/" },
  { name: "PharmaEssentia", logo: getLogo("pharmaessentia.com"), link: "https://kr.pharmaessentia.com/modules/catalogue_history2/cg_index.html" },
  { name: "PPD", logo: getLogo("ppd.com"), link: "https://www.ppd.com/" },
  { name: "Roche", logo: getLogo("roche.com"), link: "https://www.roche.co.kr/" },
  { name: "Samchundang", logo: getLogo("scd.co.kr"), link: "http://www.scd.co.kr/" },
  { 
    name: "Samil", 
    logo: "https://www.docdocdoc.co.kr/news/photo/201704/1041167_1102755_213.jpg", 
    link: "http://www.samil-pharm.com/" 
  },
  { name: "Samjin", logo: getLogo("samjinpharm.co.kr"), link: "https://www.samjinpharm.co.kr/" },
  { name: "Santen", logo: getLogo("santen.com"), link: "http://www.santen.co.kr/" },
  { name: "Sanofi", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkorGpZpmndeL82pWI5iFUVQx90QwPK6hLQ&s", link: "https://www.sanofi.co.kr/" },
  { name: "Servier", logo: getLogo("servier.com"), link: "https://www.servier.co.kr/" },
  { name: "Shin Poong", logo: getLogo("shinpoong.co.kr"), link: "https://shinpoong.co.kr/" },
  { name: "Taejoon", logo: getLogo("taejoon.co.kr"), link: "https://www.taejoon.co.kr/" },
  { name: "Takeda", logo: getLogo("takeda.com"), link: "https://www.takeda.com/ko-kr" },
  { name: "UCB", logo: getLogo("ucb.com"), link: "https://www.ucbkorea.co.kr/" },
  { 
    name: "WhanIn", 
    logo: "https://file.alphasquare.co.kr/media/images/stock_logo/kr/016580.png", 
    link: "https://www.whanin.com/" 
  },
  { 
    name: "Yooyoung", 
    logo: "https://www.khanews.com/news/photo/201010/20992_3891.jpg", 
    link: "https://www.yypharm.co.kr/" 
  },
  { 
    name: "Youngjin", 
    logo: "https://i.namu.wiki/i/zwOhRUjCJYlBSDnzdjys5RV2DisTcDHT96Lc6pgt38D_Qn9Aa9j2-7JI5iEC4kI2IP9Uz8ZHUjcsD5NPJJLO4g.svg", 
    link: "https://www.yungjin.co.kr/" 
  }
].sort((a, b) => a.name.localeCompare(b.name));

// Define DISEASE_AREAS before GET_CONTENT
export const DISEASE_AREAS = THERAPEUTIC_AREAS_EN.map(area => 
  `${area.category}: ${area.diseases.join(', ')}`
);

// EXPORTS based on Language (Can be utilized by a context)
export const GET_CONTENT = (lang: 'en' | 'ko') => {
  return {
    COMPANY_INFO: lang === 'en' ? COMPANY_INFO_EN : COMPANY_INFO_KO,
    SERVICES: lang === 'en' ? SERVICES_EN : SERVICES_KO,
    DIRECTOR: lang === 'en' ? DIRECTOR_EN : DIRECTOR_KO,
    THERAPEUTIC_AREAS: lang === 'en' ? THERAPEUTIC_AREAS_EN : THERAPEUTIC_AREAS_KO,
    UI: lang === 'en' ? UI_TEXT.en : UI_TEXT.ko,
    // Shared
    PUBLICATIONS,
    CLIENTS,
    DISEASE_AREAS // kept for compatibility
  };
};

// Default Export for backward compatibility (English)
export const COMPANY_INFO = COMPANY_INFO_EN;
export const SERVICES = SERVICES_EN;
export const DIRECTOR = DIRECTOR_EN;
export const THERAPEUTIC_AREAS = THERAPEUTIC_AREAS_EN;
