$(document).ready(function () {
    console.log('Document ready');

    // Handling popup form
    $('#openFormBtn').click(function () {
        $('#popupForm').css('display', 'flex');
    });

    $('#closeFormBtn, #popupForm').click(function (event) {
        if (event.target.id === 'popupForm' || event.target.id === 'closeFormBtn') {
            $('#popupForm').css('display', 'none');
        }
    });

    function validateForm() {
        var email = $('#email').val();
        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var termsChecked = $('#terms-checkbox').is(':checked');

        // Check if email is valid (basic validation)
        if (!email || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
W
        // Check if first name and last name are filled
        if (!firstName || !lastName) {
            alert('Please enter your first and last name.');
            return false;
        }

        // Check if terms checkbox is checked
        if (!termsChecked) {
            alert('Please agree to terms and conditions.');
            return false;
        }

        return true;
    }

    // Function to validate email format
    function isValidEmail(email) {
        // Basic email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handling form submission
    $('#submissionForm').submit(function (event) {
        event.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        var formData = $(this).serialize();

        $.ajax({
            url: 'https://getform.io/f/bxojwmea', // Replace with your Getform endpoint URL
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function (response) {
                console.log('Form submitted successfully:', response);
                alert('Form submitted successfully!');
                $('#popupForm').css('display', 'none');
                $('#submissionForm')[0].reset();
            },
            error: function (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again.');
            }
        });
    });

    // Slider function
    $.fn.slide = function () {
        var slidesToDisplay = 3.6;
        var slider = $(this).children().children();
        var sliderOuterWidth = $(this).children().outerWidth();
        var eachSlideWidth = sliderOuterWidth / slidesToDisplay;
        var dots = $('.dots .dot');
        var currentSlide = 0;
        var totalSlides = slider.children().length - 2;

        slider.children().css('width', eachSlideWidth);

        function updateDots() {
            dots.removeClass('active').eq(currentSlide).addClass('active');
        }

        function slideToNext() {
            if (currentSlide < totalSlides - 3.6) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            slider.stop().animate({
                right: currentSlide * eachSlideWidth
            }, {
                duration: 2000,
                easing: 'swing',
                step: updateDots,
                complete: updateDots
            });
        }

        updateDots();
        setInterval(slideToNext, 3000);
    };

    // Initialize slider
    $('.hover-s').hide();
    $('.slide-image').show();
    $('.slider-overflow').slide();

    // Hover effect on slide content
    $('.slide-content').hover(
        
        function () {
            $(this).find('img').hide();
            $(this).find('.hover-s').show();
        },
        function () {
            $(this).find('.hover-s').hide();
            $(this).find('img').show();
        }
    );

    // Hover effect on cards and project divs
    $('.card').hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );
    //href for card by hover effect
    $('#hbtn').click(function (e) { 
        e.preventDefault();
     
        window.location.href = 'https://www.fylehq.com';
        
        
    });
    $('#hbtn1').click(function (e) { 
        e.preventDefault();
     
        window.location.href = 'https://www.fylehq.com';
        
        
    });
    $('#hbtn2').click(function (e) { 
        e.preventDefault();
     
        window.location.href = 'https://www.fylehq.com';
        
        
    });
    $('#hbtn3').click(function (e) { 
        e.preventDefault();
     
        window.location.href = 'https://www.fylehq.com';
        
        
    });
    $('#hbtn4').click(function (e) { 
        e.preventDefault();
     
        window.location.href = 'https://www.fylehq.com';
        
        
    });

    $('.p-div-div-div').hover(
        function () {
            $(this).addClass('hovered-project');
        },
        function () {
            $(this).removeClass('hovered-project');
        }
    );

    // Image hover changes
    $('#img1').hover(function () {
        $('.p-div-img').attr('src', './assets/projects/img1.jpg');
    }, function () {
        $('.p-div-img').attr('src', './assets/projects/img.jpg');
    });

    $('#img2').hover(function () {
        $('.p-div-img').attr('src', './assets/projects/img2.jpg');
    }, function () {
        $('.p-div-img').attr('src', './assets/projects/img.jpg');
    });

    $('#img3').hover(function () {
        $('.p-div-img').attr('src', './assets/projects/img3.jpg');
    }, function () {
        $('.p-div-img').attr('src', './assets/projects/img.jpg');
    });

    console.log('jQuery executed successfully');
});
