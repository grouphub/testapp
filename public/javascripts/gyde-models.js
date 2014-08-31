'use strict';

var gydeModels = angular.module('gydeModels', []);

gydeModels.factory('User', [
  function() {
    // The "User" model constructor.
    var User = function() {
      this.conditions = {
        breastCancer: false,
        lungCancer: false,
        prostateCancer: false,
        diabetes: false,
        otherCancer: false
      };
      this.details = {
        age: '',
        zipcode: ''
      };
      this.provider = 'none';
      this.priorities = {
        saveMoney: false,
        betterCoverage: false,
        specificDoctor: false
      };
    };

    return User;
  }

/*
//Univeral coverage aggregate
gydeModels.factory('Copay', [
  function() {
    // The "Coverage" model constructor.
    var Copay = function(plan_deductable, fixed_copay, variable_copay, benifit_limit) {
      this.deductable = plan_deductable;
      this.copay = {
        fixed: fixed_copay,
        variable: variable_copay
      }
      benifit_limit = benifit_limit;
    }
]

//Univeral coverage aggregate
gydeModels.factory('Copay', [
  function() {
    // The "Coverage" model constructor.
    var Copay = function(plan_deductable, fixed_copay, variable_copay, benefit_limit) {
      this.deductable = plan_deductable;
      this.copay = {
        fixed: fixed_copay,
        variable: variable_copay
      }
      benifit_limit = benefit_limit;
    }
]


//Univeral coverage aggregate
gydeModels.factory('deductable', [
  function() {
    // The "Coverage" model constructor.
    var deductable = function(provider_deductable, prescription_deductable) {
      this.provider = provider_deductable;
      this.prescription = prescription_deductable;
    }
]

//Univeral coverage aggregate
gydeModels.factory('out_of_pocket_max', [
  function() {
    // The "Coverage" model constructor.
    var out_of_pocket_max = function(network_max, off_network_max) {
      this.network = network_max;
      this.off_network = off_network_max;
    }
]

//Univeral copay model: The model factors in if a copay is based on a set amount(fixed) or a percentage (variable)
//The modal also handles specialized rules that can govern the copay
gydeModels.factory('Copay', [
  function() {
    // The "Coverage" model constructor.
    var Copay = function(deductable, fixed_copay, variable_copay, benefit_limit, copay_rules) {
      this.deductable = deductable;
      this.copay = {
        fixed: fixed_copay,
        variable: variable_copay
      }
      this.rules = copay_rules
    }
]


//Univeral coverage aggregate
gydeModels.factory('copay_rules', [
  function() {
    // The "Coverage" model constructor.
    var special_rules = function(deductable, fixed_copay, variable_copay, benefit_limit, special_rules, copay_waiver) {

      //If set then the benefit has a limit that if exceeded will change the copay to 100%
      this.benifit_limit = benefit_limit;
      //If set then the copay will always be incurred and has no effect on the out-of-pocket maximum
      this.max_applies = max_applies;
      //The number of times this copay can be used without additional authorization before changing to 100%
      this.unauthorized_limit = unauthorized_limit
      //This indicates if the copay should be waived
      this.copay_waiver = copay_waiver;
    }
]


/*
      this.
      this.
      this.children = 0;
      this.
        breastCancer: false,
        lungCancer: false,
        prostateCancer: false,
        diabetes: false,
        otherCancer: false
      };
      this.details = {
        age: '',
        zipcode: ''
      };
      this.provider = 'none';
      this.priorities = {
        saveMoney: false,
        betterCoverage: false,
        specificDoctor: false
      };
    };

    return User;
  }
]);

gydeModels.factory('plan', [
  function() {
    // The "User" model constructor.
    var Plan = function() {
      this.id = '';
      this.network_provider = '';
      this.plan_name = '';
      this.network_type = '';

      this.family = false;
      this.coverage = {
          preventative = {
            physical_exams: new copay(0,0,0,0, true),
            screenings = {
              cancer: new copay(0,0,0,0, true),
              hpv: new copay(0,0,0,0, true),
              diabetes: new copay(0,0,0,0, true),
              cholestoral: new copay(0,0,0,0, true),
              blood pressure: new copay(0,0,0,0, true),
              hearing: new copay(0,0,0,0, true),
              vision: new copay(0,0,0,0, true),
            }
            immunizations = new copay(0,0,0,0, true),
            health_education = new copay(0,0,0,0, true),
            intervention_services = new copay(0,0,0,0, true),
            hiv_testing = new copay(0,0,0,0, true),
          }
          physician = {
            office_visits: new copay(0,0,0,0, true),
            online_visit: new copay(0,0,0,0, true),
            specialist: new copay(0,0,0,0, true),

          }
          therapies = {
            physical: new copay(0,0,0,0, true),
            occupational: new copay(0,0,0,0, true),
            chiropractic: new copay(0,0,0,0, true),
            accupuncture:
            accupressure:
            infusion_therapy;
          }
        
          diagnostics = {
            xray:
            lab:
            imaging
          }
          medical_services = {
            hospital: new copay(0,0,0,0, true),
            nursing_facility: new copay(0,0,0,0, true),
            urgent: new copay(0,0,0,0, true),
            emergengy: new copay(0,0,0,0, true),
            ambulance:
            ambulatory_surgery_center
          }
          pregnancy = {
            office_visits:
            infertility_services:
          }
          facility_services 
          {
            mental:
            nervous_disorder:
            substance_abuse:
          }
          professional_services 
          {
            mental:
            nervous_disorder:
            substance_abuse:
          }
          medical_equipment;
          home_health_care;

          perscriptions = {
            preventative_immunization
            retail = { 
              tier_1
              tier_2
              tier_3
            }
            mail = { 
              tier_1
              tier_2
              tier_3
            }
            specialty = { 
              tier_4
            }
            unsupported_pharmacy = {
              in_california
              out_california;
            }

          }

        }

      this.cost_factors = {
        deductable '',
        out_of_pocket_max: '',
      }
      
        services =
        {
          lab = '';
          xray = '';
          hospital = '';
        }

        medication = {
          generic = ''
          brand = ''
          special = ''
        }
      }

      this.copay_factors {
        preventative_care = ''

      }
      this.benifit_factors {

      }

      this.conditions = {
        breastCancer: false,
        lungCancer: false,
        prostateCancer: false,
        diabetes: false,
        otherCancer: false
      };
      this.details = {
        age: '',
        zipcode: ''
      };
      this.provider = 'none';
      this.priorities = {
        saveMoney: false,
        betterCoverage: false,
        specificDoctor: false
      };
    };

    return User;
  }*/
]);
