myApp.service("angularService", function ($http) {

    this.getDateTime = function (InvoiceDate) {
        if (InvoiceDate == null || InvoiceDate == undefined)
            return null;
        var d = new Date(InvoiceDate);
        var dformat = [d.getMonth() + 1,
        d.getDate(),
        d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');
        return dformat;
    }

    this.industryLogin = function (UserId, Password) {
        return $http.get("/api/JobSeekerLogin/Industrylogin", { params: { UserId: UserId, Password: Password } });
    }

    this.ERTIndustryLogin = function (UserId, Password, ERPUrl) {
        return $http.get('https://demo.jiadabokaro.com//api/industrylogin/IndustryLogin?UserId=9997905444&Password=134498');
    }

    this.signIn = function (JobSeekerLogin) {
        var response = $http({
            method: "post",
            url: "/api/JobSeekerLogin/SignIn",
            data: JSON.stringify(JobSeekerLogin),
            dataType: "json",
        });
        return response;
    }
    this.getloggedInEmployee = function () {
        var response = $http({
            method: "post",
            url: "/api/JobSeekerLogin/getLoginJobSeeker",
            data: JSON.stringify(),
            dataType: "json",
        });
        return response;
    }

    this.submitQuery = function (Enquiry) {
        var response = $http({
            method: "post",
            url: "/api/Enquiry/SaveEnquiry",
            data: JSON.stringify(Enquiry),
            dataType: "json",
        });
        return response;
    };
    this.saveRegistration = function (LoginJobSeekerModel) {
        var response = $http({
            method: "post",
            url: "/api/JobSeekerRegistration/SaveRegistrationJobSeeker",
            data: JSON.stringify(LoginJobSeekerModel),
            dataType: "json",
        });
        return response;
    };

    this.sendMessage = function (contactModel) {
        var response = $http({
            method: "post",
            url: "/api/Enquiry/SendMessage",
            data: JSON.stringify(contactModel),
            dataType: "json",
        });
        return response;
    };
    this.getJobSeekerList = function () {
        return $http.get('/api/JobSeekerRegistration/JobSeekerList');
    };
    this.logoutjobseeker = function () {
        return $http.get("/api/Dashboard/LogoutJobSeeker");
    }
    this.informationJobSeekerList = function () {
        return $http.get('/api/Dashboard/JobSeekerInformationList');
    };

    this.checkjobseekerLogin = function () {
        return $http.get("/api/Dashboard/CheckJobSeekerLogin");
    }
    this.getjobseekerDetail = function () {
        return $http.get("/api/Dashboard/JobSeekerDetail");
    }

    this.viewsetJobSeekerId = function (JobSeekerId) {
        return $http.get('/api/Dashboard/SetJobSeekerId', { params: { JobSeekerId: JobSeekerId } });

    }
    this.changejobseekerPassword = function (changePasswordModel) {
        var response = $http({
            method: "post",
            url: "/api/Dashboard/changePassword",
            data: JSON.stringify(changePasswordModel),
            dataType: "json",
        });
        return response;
    };

    this.getJobSeeker = function () {
        return $http.get('/api/Dashboard/getLoggedInJobSeeker');
    }

    this.getDetails = function () {
        return $http.get('/api/Dashboard/GetDetails');
    }

    this.saveDetails = function (JobSeekerModel) {
        var response = $http({
            method: "post",
            url: "/api/Dashboard/SaveDetail",
            data: JSON.stringify(JobSeekerModel),
            dataType: "json",
        });
        return response;
    };
    //------------------------------------Website Job-----------------------------------------------
    this.getWebViewJobList = function (/*CityId*/) {
        return $http.get('/api/JobSeekerLogin/GetWebViewJobList'/*, { params: { CityId: CityId } }*/);

    }

    this.getWebViewDetailJobList = function (CityId/*,IndustryType*/) {
        if (CityId == null || CityId == undefined)
            CityId = 0;
        return $http.get('/api/WebJobList/GetViewJobDetailList', { params: { CityId: CityId/*, IndustryType: IndustryType */ } });

    }
    //---------------------------------ViewJob-------------------------------------------------------------------
    this.getViewJobList = function (CityId, JobSector) {
        if (CityId == null || CityId == undefined)
            CityId = 0;
        if (JobSector == undefined || JobSector == null)
            JobSector = '';
        return $http.get('/api/ViewJob/GetViewJobList', { params: { JobSector: JobSector, CityId: CityId } });

    }

    //-------------------------------Investor Registration------------------------------------------------------
    this.saveInvestorRegistration = function (InvestorRegistrationModel) {
        var response = $http({
            method: "post",
            url: "/api/InvestorRegistration/SaveRegistrationInvestor",
            data: JSON.stringify(InvestorRegistrationModel),
            dataType: "json",
        });
        return response;
    };
    //-------------------------------Company Registration------------------------------------------------------

    this.saveCompanyRegistration = function (CompanyRegistrationModel) {
        var response = $http({
            method: "post",
            url: "/api/CompanyRegistration/SaveRegistrationCompany",
            data: JSON.stringify(CompanyRegistrationModel),
            dataType: "json",
        });
        return response;
    };
    //-------------------------------Country------------------------------------------------------

    this.getCountryList = function () {
        return $http.get("/api/country/CountryList")
    }
    this.deleteCountry = function (CountryId) {
        return $http.get("/api/country/DeleteCountry", { params: { CountryId: CountryId } })
    }

    this.saveCountry = function (CountryModel) {
        var response = $http({
            method: "post",
            url: "/api/country/SaveCountry",
            data: JSON.stringify(CountryModel),
            dataType: "json"
        });
        return response;
    }
    //-------------------------------State------------------------------------------------------

    this.getStateList = function () {
        return $http.get("/api/state/StateList")
    }
    this.deleteState = function (StateId) {
        return $http.get("/api/state/DeleteState", { params: { StateId: StateId } })
    }

    this.saveState = function (StateModel) {
        var response = $http({
            method: "post",
            url: "/api/state/SaveState",
            data: JSON.stringify(StateModel),
            dataType: "json"
        });
        return response;
    }
    //-------------------------------City------------------------------------------------------

    this.getCityList = function () {
        return $http.get("/api/city/CityList")
    }

    this.getJobSectorList = function () {
        return $http.get("/api/ViewJob/JobSectorList")
    }
    this.deleteCity = function (CityId) {
        return $http.get("/api/city/DeleteCity", { params: { CityId: CityId } })
    }

    this.saveCity = function (CityModel) {
        var response = $http({
            method: "post",
            url: "/api/city/SaveCity",
            data: JSON.stringify(CityModel),
            dataType: "json"
        });
        return response;
    }

})