
export const Routes = {
    onBoarding:{
        tag: 'onBoarding',
        welcomeScreen: 'Welcome',
        loginScreen: 'Login',
        registerScreen: 'Register',
        ForgetScreen: 'Forget',
        ResetScreen: 'Reset',
    },
    main:{
        tag: 'app',
        chatScreen: 'Chat',
        shopScreen: 'Shop',
        profileScreen: 'Profile',
        dosageScreen: 'Dosage',
        settingScreen: 'Setting',
        dosageStack:{
            tag: 'dosageStack',
            dosageListScreen: 'DosageList',
            dosageDetailScreen: 'DosageDetail',
        },
        blogStack:{
            tag: 'blogStack',
            searchScreen: 'Search',
            blogDetailScreen: 'BlogDetail',
        }
    }
}