enum LicenseType {
    STUDENT = 'Student',
    SPORT = '',
    COMMERCIAL = 'Commercial'
}

interface IPerson {
    name: string;
    age: number
}

interface IPilot extends IPerson {
    licenseNumber: number
    licenseType: LicenseType;
}

const isCommercialLicense = (license: LicenseType): boolean => license === LicenseType.COMMERCIAL;

const test: IPilot = {
    age: 24,
    licenseNumber: 2,
    licenseType: LicenseType.COMMERCIAL,
    name: "Test"
}
console.log(isCommercialLicense(test.licenseType))
