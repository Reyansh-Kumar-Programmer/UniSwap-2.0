import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'wqymn45p',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skdG3eeVFsh5WVsYDqtpUvYq96Xb5RGuh6Nxrvr0cheEFPTpBDKBk6EFAOPR94xZDC5IWuq2vuH4wF30JZkLDtKhmiTYPatEEKwZCyOm5OT3244Ic8EDaiP6gFnmw86zRBq9M7yLKYOAu2ceBuy8EcvXsgqaPUt8ghorJlIdplSNpGvw5YbO',
    useCdn: false
});