tailwind.config = {
    theme: {
      extend: {
    //    Code Start Here
    // All Color Part 
    colors: {
        headercolor:"rgba(22, 12, 109, 0.50)",
        hovercolor:"#1BBF00",
        overlaycolor:"rgba(106, 98, 197, 0.9)",
        choosecolor:"#726E9E",
      },
    // All Color Part 

    // All Containers Start 
    width: {
        headerContainer:"1170px",
        bannerContainer:"962px",
        richContainer:"1209px",
        chooseContainer:"1147px",
        createContainer:"1079px",
      },
    // All Containers End

    // Font Family
    fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'papri': ['Paprika', 'cursive'],
    },
    // Font Family

    // Background Images
    backgroundImage: {
        bannerBg: "url('images/bannerbg.png')",
        counterBg: "url('images/counterbg.png')",
        chooserBg: "url('images/chooserbg.png')",
        whatbannerBg: "url('images/what_banner.png')",
        whatcardBg: "url('images/whatcard_4bg.png')",
        createBg: "url('images/create_banner.png')",
        rightBg: "url('images/right_banner_bg.png')",
        rightrecBg: "url('images/right_rectangle.png')",
        rightrec2Bg: "url('images/right_rectangle_2.png')",
        rightrecBg: "url('images/right_rectangle.png')",
      },
    // Background Images
    //    Code End Here
      },
    },
  };