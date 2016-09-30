
angularFormsApp.factory('efService',
    function () {
        return {
            employee: {
                address : "",
                email : "",
                fullName: "",
                notes: "The ideal employee.  Just don't touch his red stapler.",
                department: "Administration",
                dateHired :"1/1/2016",
                breakTime :"1/11/2014 3:03 AM",
                state : "china",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    });