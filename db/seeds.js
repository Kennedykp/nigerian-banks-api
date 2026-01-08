const supabase = require('../src/config/supabase');


const banks = [
    {
        "name": "78 Finance Company Ltd",
        "slug": "78-finance-company-ltd-ng",
        "code": "40195",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/default.png",
        "website": null
    },
    {
        "name": "9mobile 9Payment Service Bank",
        "slug": "9mobile-9payment-service-bank-ng",
        "code": "120001",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/9psb.png",
        "website": "https://www.9psb.com.ng"
    },
    {
        "name": "Abbey Mortgage Bank",
        "slug": "abbey-mortgage-bank-ng",
        "code": "404",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/abbey.png",
        "website": "https://www.abbeybuilding.com"
    },
    {
        "name": "Above Only MFB",
        "slug": "above-only-mfb",
        "code": "51204",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/default.png",
        "website": null
    },
    {
        "name": "Abulesoro MFB",
        "slug": "abulesoro-mfb-ng",
        "code": "51312",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/default.png",
        "website": null
    },
    {
        "name": "Access Bank",
        "slug": "access-bank",
        "code": "044",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/access-bank.png",
        "website": "https://www.accessbankplc.com"
    },
    {
        "name": "Access Bank (Diamond)",
        "slug": "access-bank-diamond",
        "code": "063",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/access-bank.png",
        "website": "https://www.accessbankplc.com"
    },
    {
        "name": "Accion Microfinance Bank",
        "slug": "accion-microfinance-bank-ng",
        "code": "602",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/accion.png",
        "website": "https://www.accionmfb.com"
    },
    {
        "name": "Aella MFB",
        "slug": "aella-mfb-ng",
        "code": "50315",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/aella.png",
        "website": "https://www.aellaapp.com"
    },
    {
        "name": "AG Mortgage Bank",
        "slug": "ag-mortgage-bank-ng",
        "code": "90077",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/default.png",
        "website": null
    },
    {
        "name": "Ahmadu Bello University Microfinance Bank",
        "slug": "ahmadu-bello-university-microfinance-bank-ng",
        "code": "50036",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/default.png",
        "website": null
    },
    {
        "name": "Airtel Smartcash PSB",
        "slug": "airtel-smartcash-psb-ng",
        "code": "120004",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/smartcash.png",
        "website": "https://smartcashpsb.com"
    },
    {
        "name": "AKU Microfinance Bank",
        "slug": "aku-mfb",
        "code": "51336",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/default.png",
        "website": null
    },
    {
        "name": "ALAT by WEMA",
        "slug": "alat-by-wema",
        "code": "035A",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/alat-by-wema.png",
        "website": "https://www.alat.ng"
    },
    {
        "name": "Alpha Morgan Bank",
        "slug": "alpha-morgan",
        "code": "108",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/alpha-morgan.png",
        "website": "https://www.alphamorganbank.com"
    },
    {
        "name": "Alternative bank",
        "slug": "the-alternative-bank-ng",
        "code": "000304",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/alternative-bank.png",
        "website": "https://www.altern8.ng"
    },
    {
        "name": "ASO Savings and Loans",
        "slug": "asosavings",
        "code": "401",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/aso-savings.png",
        "website": "https://www.asoplc.com"
    },
    {
        "name": "BANKLY MFB",
        "slug": "ampersand-microfinance-bank-ng",
        "code": "51341",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/bankly.png",
        "website": "https://www.bankly.ng"
    },
    {
        "name": "Baobab Microfinance Bank",
        "slug": "baobab-microfinance-bank-ng",
        "code": "MFB50992",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/baobab.png",
        "website": "https://www.baobab.com"
    },
    {
        "name": "Branch International Finance Company Limited",
        "slug": "branch",
        "code": "FC40163",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/branch.png",
        "website": "https://www.branch.co"
    },
    {
        "name": "Carbon",
        "slug": "carbon",
        "code": "565",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/carbon.png",
        "website": "https://www.getcarbon.co"
    },
    {
        "name": "CEMCS Microfinance Bank",
        "slug": "cemcs-microfinance-bank",
        "code": "50823",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/cemcs.png",
        "website": null
    },
    {
        "name": "Citibank Nigeria",
        "slug": "citibank-nigeria",
        "code": "023",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/citibank-nigeria.png",
        "website": "https://www.citigroup.com"
    },
    {
        "name": "Coronation Merchant Bank",
        "slug": "coronation-merchant-bank-ng",
        "code": "559",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/coronation.png",
        "website": "https://www.coronationmb.com"
    },
    {
        "name": "Dot Microfinance Bank",
        "slug": "dot-microfinance-bank-ng",
        "code": "50162",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/dot.png",
        "website": "https://www.dotmfb.com"
    },
    {
        "name": "Ecobank Nigeria",
        "slug": "ecobank-nigeria",
        "code": "050",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/ecobank-nigeria.png",
        "website": "https://www.ecobank.com"
    },
    {
        "name": "Eyowo",
        "slug": "eyowo",
        "code": "50126",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/eyowo.png",
        "website": "https://www.eyowo.com"
    },
    {
        "name": "Fairmoney Microfinance Bank",
        "slug": "fairmoney-microfinance-bank-ng",
        "code": "51318",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/fairmoney.png",
        "website": "https://www.fairmoney.io"
    },
    {
        "name": "Fidelity Bank",
        "slug": "fidelity-bank",
        "code": "070",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/fidelity-bank.png",
        "website": "https://www.fidelitybank.ng"
    },
    {
        "name": "First Bank of Nigeria",
        "slug": "first-bank-of-nigeria",
        "code": "011",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/first-bank-of-nigeria.png",
        "website": "https://www.firstbanknigeria.com"
    },
    {
        "name": "First City Monument Bank",
        "slug": "first-city-monument-bank",
        "code": "214",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/first-city-monument-bank.png",
        "website": "https://www.fcmb.com"
    },
    {
        "name": "FSDH Merchant Bank Limited",
        "slug": "fsdh-merchant-bank-limited",
        "code": "501",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/fsdh.png",
        "website": "https://www.fsdhgroup.com"
    },
    {
        "name": "Globus Bank",
        "slug": "globus-bank",
        "code": "00103",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/globus-bank.png",
        "website": "https://www.globusbank.com"
    },
    {
        "name": "GoMoney",
        "slug": "gomoney",
        "code": "100022",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/gomoney.png",
        "website": "https://www.gomoney.global"
    },
    {
        "name": "Greenwich Merchant Bank",
        "slug": "greenwich-merchant-bank-ng",
        "code": "562",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/greenwich.png",
        "website": "https://www.greenwichmerchantbank.com"
    },
    {
        "name": "GROOMING MICROFINANCE BANK",
        "slug": "grooming-microfinance-bank-ng",
        "code": "51276",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/grooming.png",
        "website": "https://www.groomingmfb.com"
    },
    {
        "name": "Guaranty Trust Bank",
        "slug": "guaranty-trust-bank",
        "code": "058",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/guaranty-trust-bank.png",
        "website": "https://www.gtbank.com"
    },
    {
        "name": "HopePSB",
        "slug": "hopepsb-ng",
        "code": "120002",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/hopepsb.png",
        "website": "https://hopepsb.com"
    },
    {
        "name": "Jaiz Bank",
        "slug": "jaiz-bank",
        "code": "301",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/jaiz-bank.png",
        "website": "https://jaizbankplc.com"
    },
    {
        "name": "Keystone Bank",
        "slug": "keystone-bank",
        "code": "082",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/keystone-bank.png",
        "website": "https://www.keystonebankng.com"
    },
    {
        "name": "KONGAPAY",
        "slug": "kongapay-tech-ltd",
        "code": "100025",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/konga.png",
        "website": "https://www.konga.com"
    },
    {
        "name": "Kredi Money MFB LTD",
        "slug": "kredi-money-mfb",
        "code": "50200",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/kredi.png",
        "website": "https://www.kredi.ng"
    },
    {
        "name": "Kuda Bank",
        "slug": "kuda-bank",
        "code": "50211",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/kuda-bank.png",
        "website": "https://www.kuda.com"
    },
    {
        "name": "Letshego Microfinance Bank",
        "slug": "letshego-microfinance-bank",
        "code": "090420",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/letshego.png",
        "website": "https://www.letshego.com"
    },
    {
        "name": "Lotus Bank",
        "slug": "lotus-bank",
        "code": "303",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/lotus-bank.png",
        "website": "https://www.lotusbank.com"
    },
    {
        "name": "Mayfair MFB",
        "slug": "mayfair-mfb",
        "code": "50563",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/mayfair.png",
        "website": "https://www.mayfairmfb.com"
    },
    {
        "name": "Mint MFB",
        "slug": "mint-mfb",
        "code": "50304",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/mint.png",
        "website": "https://www.mintfinance.ng"
    },
    {
        "name": "Moniepoint MFB",
        "slug": "moniepoint-mfb-ng",
        "code": "50515",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/moniepoint.png",
        "website": "https://www.moniepoint.com"
    },
    {
        "name": "MTN Momo PSB",
        "slug": "mtn-momo-psb-ng",
        "code": "120003",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/momo.png",
        "website": "https://momoagent.mtn.ng"
    },
    {
        "name": "NOVA BANK",
        "slug": "nova-bank-ng",
        "code": "561",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/nova-bank.png",
        "website": "https://www.novabank.com.ng"
    },
    {
        "name": "NPF MICROFINANCE BANK",
        "slug": "npf-microfinance-bank-ng",
        "code": "50629",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/npf.png",
        "website": null
    },
    {
        "name": "OPay Digital Services Limited (OPay)",
        "slug": "paycom",
        "code": "999992",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/opay.png",
        "website": "https://www.opayweb.com"
    },
    {
        "name": "Optimus Bank Limited",
        "slug": "optimus-bank-ltd",
        "code": "107",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/optimus-bank.png",
        "website": "https://www.optimusbank.com"
    },
    {
        "name": "Paga",
        "slug": "paga",
        "code": "100002",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/paga.png",
        "website": "https://www.mypaga.com"
    },
    {
        "name": "PalmPay",
        "slug": "palmpay",
        "code": "999991",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/palmpay.png",
        "website": "https://www.palmpay.com"
    },
    {
        "name": "Parallex Bank",
        "slug": "parallex-bank",
        "code": "104",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/parallex-bank.png",
        "website": "https://www.parallexbank.com"
    },
    {
        "name": "Paystack-Titan",
        "slug": "titan-paystack",
        "code": "100039",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/paystack.png",
        "website": "https://paystack.com"
    },
    {
        "name": "Pocket App",
        "slug": "pocket",
        "code": "00716",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/pocket.png",
        "website": "https://www.pocketapp.com"
    },
    {
        "name": "Polaris Bank",
        "slug": "polaris-bank",
        "code": "076",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/polaris-bank.png",
        "website": "https://www.polarisbanklimited.com"
    },
    {
        "name": "PremiumTrust Bank",
        "slug": "premiumtrust-bank-ng",
        "code": "105",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/premium-trust-bank.png",
        "website": "https://www.premiumtrustbank.com"
    },
    {
        "name": "Providus Bank",
        "slug": "providus-bank",
        "code": "101",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/providus-bank.png",
        "website": "https://www.providusbank.com"
    },
    {
        "name": "Rand Merchant Bank",
        "slug": "rand-merchant-bank",
        "code": "502",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/rand.png",
        "website": "https://www.rmb.com.ng"
    },
    {
        "name": "Rubies MFB",
        "slug": "rubies-mfb",
        "code": "125",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/rubies.png",
        "website": "https://www.rubiesbank.com"
    },
    {
        "name": "Safe Haven MFB",
        "slug": "safe-haven-mfb-ng",
        "code": "51113",
        "type": "microfinance",
        "logo_url": "https://nigerianbanks.xyz/logo/safe-haven.png",
        "website": "https://www.safehavenmfb.com"
    },
    {
        "name": "Signature Bank Ltd",
        "slug": "signature-bank-ltd-ng",
        "code": "106",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/signature-bank.png",
        "website": "https://www.signaturebankng.com"
    },
    {
        "name": "Sparkle Microfinance Bank",
        "slug": "sparkle-microfinance-bank",
        "code": "51310",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/sparkle.png",
        "website": "https://www.sparkle.ng"
    },
    {
        "name": "Stanbic IBTC Bank",
        "slug": "stanbic-ibtc-bank",
        "code": "221",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/stanbic-ibtc-bank.png",
        "website": "https://www.stanbicibtcbank.com"
    },
    {
        "name": "Standard Chartered Bank",
        "slug": "standard-chartered-bank",
        "code": "068",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/standard-chartered-bank.png",
        "website": "https://www.sc.com/ng"
    },
    {
        "name": "Sterling Bank",
        "slug": "sterling-bank",
        "code": "232",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/sterling-bank.png",
        "website": "https://www.sterling.ng"
    },
    {
        "name": "Suntrust Bank",
        "slug": "suntrust-bank",
        "code": "100",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/suntrust-bank.png",
        "website": "https://www.suntrustng.com"
    },
    {
        "name": "TAJ Bank",
        "slug": "taj-bank",
        "code": "302",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/taj-bank.png",
        "website": "https://www.tajbank.com"
    },
    {
        "name": "Tangerine Money",
        "slug": "tangerine-money",
        "code": "51269",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/tangerine.png",
        "website": "https://www.tangerine.ng"
    },
    {
        "name": "Titan Bank",
        "slug": "titan-bank",
        "code": "102",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/titan-trust-bank.png",
        "website": "https://www.titantrustbank.com"
    },
    {
        "name": "Union Bank of Nigeria",
        "slug": "union-bank-of-nigeria",
        "code": "032",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/union-bank-of-nigeria.png",
        "website": "https://www.unionbankng.com"
    },
    {
        "name": "United Bank For Africa",
        "slug": "united-bank-for-africa",
        "code": "033",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/united-bank-for-africa.png",
        "website": "https://www.ubagroup.com"
    },
    {
        "name": "Unity Bank",
        "slug": "unity-bank",
        "code": "215",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/unity-bank.png",
        "website": "https://www.unitybankng.com"
    },
    {
        "name": "VFD Microfinance Bank Limited",
        "slug": "vfd",
        "code": "566",
        "type": "fintech",
        "logo_url": "https://nigerianbanks.xyz/logo/vfd.png",
        "website": "https://www.vfd-mfb.com"
    },
    {
        "name": "Wema Bank",
        "slug": "wema-bank",
        "code": "035",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/wema-bank.png",
        "website": "https://www.wemabank.com"
    },
    {
        "name": "Zenith Bank",
        "slug": "zenith-bank",
        "code": "057",
        "type": "commercial",
        "logo_url": "https://nigerianbanks.xyz/logo/zenith-bank.png",
        "website": "https://www.zenithbank.com"
    }
];

const seedBanks = async () => {
    console.log('Starting seed...');
    console.log(`Total banks to seed: ${banks.length}`);

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
        console.error('Error: Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env file.');
        process.exit(1);
    }

    const { error } = await supabase
        .from('banks')
        .upsert(banks, { onConflict: 'slug' });

    if (error) {
        console.error('Error seeding banks:', error.message);
        process.exit(1);
    } else {
        console.log(`Successfully seeded ${banks.length} banks.`);
    }
};

seedBanks();
