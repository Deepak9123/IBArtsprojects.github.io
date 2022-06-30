$(function () {

    //var app = angular.module("myApp", []);
    //app.controller('myController', function () {



    var myApp = angular.module("myApp",[])
        .constant('ConstantData', {
            PatientStatus: [
                { Key: null, Value: '--Select Patient Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],
            BloodGroup: [
                { Key: null, Value: '--Select Blood Group--' },
                { Key: 1, Value: 'A+' },
                { Key: 2, Value: 'A-' },
                { Key: 3, Value: 'B+' },
                { Key: 4, Value: 'B-' },
                { Key: 5, Value: 'O+' },
                { Key: 6, Value: 'O-' },
                { Key: 7, Value: 'AB+' },
                { Key: 8, Value: 'AB-' },
            ],

            Nationality: [
                { Key: null, Value: '--Select Nationality--' },
                { Key: 1, Value: 'Indian' },
                { Key: 2, Value: 'Other' }
            ],

            Gender: [
                { Key: null, Value: '--Select Gender--' },
                { Key: 1, Value: 'Male' },
                { Key: 2, Value: 'Female' }
            ],

            TaskMasterStatus: [
                { Key: null, Value: '--Select Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],
            RoleStatus: [
                { Key: null, Value: '--Select Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],
            LoginStatus: [
                { Key: null, Value: '--Select Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],

            EmployeeStatus: [
                { Key: null, Value: '--Select Employee Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],
            EmployeeTypeStatus: [
                { Key: null, Value: '--Select Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],
            HospitalStatus: [
                { Key: null, Value: '--Select Hospital Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],

            CityStatus: [
                { Key: null, Value: '--Select Class Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],
            StateStatus: [
                { Key: null, Value: '--Select Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],

            SessionStatus: [
                { Key: null, Value: '--Select Session Status--' },
                { Key: 1, Value: 'Active' },
                { Key: 2, Value: 'Inactive' }
            ],
            FeeType: {
                1: "Fee",
                2: "Transport",
                3: "Fine",
                4: "Charge",
                5: "Registration",
                6: "Hostel",
                7: "PreviousDues",
                8: "ExtraCharge",
                9: "ArrearDue",
                20: "Admission",
                21: "ReAdmission",
            },

            AppointmentStatus: [
                { Key: null, Value: '--Select Appointment Status--' },
                { Key: 1, Value: 'Pending' },
                { Key: 2, Value: 'Approved' },
                { Key: 3, Value: 'Cancel' }
            ],
            Gender: [
                { Key: null, Value: '--Select Gender--' },
                { Key: 1, Value: 'Male' },
                { Key: 2, Value: 'Female' }
            ],
            DoctorStatus: [
                { Key: null, Value: '--Select Doctor Status--' },
                { Key: 1, Value: 'On Duty' },
                { Key: 2, Value: 'Off Duty' }
            ],
            Nationality: [
                { Key: null, Value: '--Select Nationality--' },
                { Key: 1, Value: 'Indian' },
                { Key: 2, Value: 'Other' }
            ],
            Religion: [
                { Key: null, Value: '--Select Religion--' },
                { Key: 1, Value: 'Hindu' },
                { Key: 2, Value: 'Buddhist' },
                { Key: 3, Value: 'Sikh' },
                { Key: 4, Value: 'Jain' },
                { Key: 5, Value: 'Muslim' },
                { Key: 6, Value: 'Christian' },
                { Key: 7, Value: 'Other' }
            ],
            Category: [
                { Key: null, Value: '--Select Category--' },
                { Key: 1, Value: 'SC/ST' },
                { Key: 2, Value: 'OBC' },
                { Key: 3, Value: 'General' }
            ],

            MaritalStatus: [
                { Key: null, Value: '--Select Marital Status--' },
                { Key: 1, Value: 'Single' },
                { Key: 2, Value: 'Married' },
                { Key: 3, Value: 'Widowed' },
                { Key: 4, Value: 'Separated' },
                { Key: 5, Value: 'NotSpecified' },
            ],
            BloodGroup: [
                { Key: null, Value: '--Select Blood Group--' },
                { Key: 1, Value: 'O' },
                { Key: 2, Value: 'O+' },
                { Key: 3, Value: 'O-' },
                { Key: 4, Value: 'A' },
                { Key: 5, Value: 'A+' },
                { Key: 6, Value: 'A-' },
                { Key: 7, Value: 'B' },
                { Key: 8, Value: 'B+' },
                { Key: 9, Value: 'B-' },
                { Key: 10, Value: 'AB' },
                { Key: 11, Value: 'AB-' },
                { Key: 12, Value: 'AB+' },
            ],
            PaymentMode: [
                { Key: null, Value: '--Select Payment Mode--' },
                { Key: 1, Value: 'Cash' },
                //{ Key: 2, Value: 'Card' },
                //{ Key: 3, Value: 'Bank Challan' },
                //{ Key: 4, Value: 'Demand Draft' },
                { Key: 5, Value: 'Cheque' },
                { Key: 6, Value: 'POS' },
                //{ Key: 7, Value: 'Card Payment' },
                { Key: 8, Value: 'Online' },
                { Key: 10, Value: 'Advance' }
            ],
            PaymentModes: { 1: "Cash", 5: "Cheque", 6: "POS", 8: "Online", 10: 'Advance' }
        });
});





(function () {
    'use strict';

    angular
        .module('app')
})();