function solve(input) {
    const educationFormForDiscount = "online";
    const combinedCourseDiscount = 0.10;
    const moduleDiscount = 0.06;

    const JSFundamentalsCoursePrice = 170;
    const JSAdvancedCoursePrice = 180;
    const JSApplicationsCoursePrice = 190;

    const [JSFundamentalsCourseActivity, JSAdvancedCourseActivity, JSApplicationsCourseActivity] = input.slice(0, 3);
    const educationForm = input[input.length - 1];

    const coursesInformation = {
        JSFundamentals: [JSFundamentalsCourseActivity, JSFundamentalsCoursePrice],
        JSAdvanced: [JSAdvancedCourseActivity, JSAdvancedCoursePrice],
        JSApplications: [JSApplicationsCourseActivity, JSApplicationsCoursePrice]
    }

    if (coursesInformation["JSFundamentals"][0] && coursesInformation["JSAdvanced"][0] && !coursesInformation["JSApplications"][0]) {
        coursesInformation["JSAdvanced"][1] -= coursesInformation["JSAdvanced"][1] * combinedCourseDiscount;
    }
    else if (coursesInformation["JSFundamentals"][0] && coursesInformation["JSAdvanced"][0] && coursesInformation["JSApplications"][0]) {
        coursesInformation["JSFundamentals"][0] -= coursesInformation["JSFundamentals"][0] * moduleDiscount;
        coursesInformation["JSAdvanced"][0] -= coursesInformation["JSAdvanced"][0] * moduleDiscount;
        coursesInformation["JSApplications"][0] -= coursesInformation["JSApplications"][0] * moduleDiscount;
    }
    if (educationForm === educationFormForDiscount) {
        for (const course in coursesInformation) {
            if (coursesInformation[course][0]) {
                coursesInformation[course][1] -= coursesInformation[course][1] * moduleDiscount;
            }
        }
    }

    const priceCalculator = () => {
        let price = 0;
        for (const course in coursesInformation) {
            if (coursesInformation[course][0]) {
                price += coursesInformation[course][1];
            }
        }

        return Math.round(price);
    };
    const totalPrice = priceCalculator();

    console.log(totalPrice);
}

solve(
    [true, true, false, "onsite"]
);