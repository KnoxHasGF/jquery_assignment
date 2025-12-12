$(document).ready(function () {

    $("#submitBtn").click(function () {

        let isValid = true;

        // Clear old errors
        $("input").removeClass("is-invalid");
        $(".error-text").text("");

        // Username
        if ($("#username").val().trim() === "") {
            $("#username").addClass("is-invalid");
            $("#username").siblings(".error-text").text("This field must not be empty");
            isValid = false;
        }

        // Email
        if ($("#email").val().trim() === "") {
            $("#email").addClass("is-invalid");
            $("#email").siblings(".error-text").text("This field must not be empty");
            isValid = false;
        }

        // Password
        if ($("#password").val().trim() === "") {
            $("#password").addClass("is-invalid");
            $("#password").siblings(".error-text").text("This field must not be empty");
            isValid = false;
        }

        // Confirm Password
        if ($("#confirmPassword").val().trim() === "") {
            $("#confirmPassword").addClass("is-invalid");
            $("#confirmPassword").siblings(".error-text").text("This field must not be empty");
            isValid = false;
        }

        // Confirm Password mismatch
        if ($("#password").val() !== $("#confirmPassword").val()) {
            $("#confirmPassword").addClass("is-invalid");
            $("#confirmPassword").siblings(".error-text").text("Confirmed password mismatched the password");
            isValid = false;
        }

        // Interesting Topics
        if ($(".topic:checked").length === 0) {
            $("#topicError").text("At least one topic must be selected");
            isValid = false;
        } else {
            $("#topicError").text("");
        }

        // Gender
        if ($("#gender").val() === "--") {
            $("#genderError").text("Please choose your gender");
            isValid = false;
        } else {
            $("#genderError").text("");
        }

        // If all good
        if (isValid) {
            alert("Form submitted successfully!");
        }

    });

});
