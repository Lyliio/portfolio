const $darkModeButton = $("#darkmode"); 
      
$darkModeButton.click(function() {
    const $navbar = $("#navbar")
    const $footer = $('footer')
    console.log($navbar)
    const $a = $('a')
    // LIGHTMODE
    if($navbar.hasClass('bg-dark')) {
      $navbar.removeClass('bg-dark');
      $navbar.attr('data-bs-theme', 'light');
      
      const $button = $('#darkmode');
      $button.removeClass('btn-light');
      $button.addClass('btn-dark');
      $button.css('background-color', 'rgb(33, 37, 41)');
      $button.html('<i class="fas fa-moon"></i>');
      $footer.removeClass('bg-dark');
      $footer.css('color', 'rgb(33, 37, 41)' );
      $a.css('color', 'rgb(33, 37, 41)')
    // DARKMODE
    } else {
        const $sun = $('<i class="fas fa-sun"></i>')
        $navbar.addClass("bg-dark");
        $navbar.attr('data-bs-theme', 'dark');
        const $button = $('#darkmode');
        $button.removeClass('btn-dark');
        $button.addClass('btn-light');
        $button.css('background-color', 'white');
        $button.html('<i class="fas fa-sun"></i>');
        $footer.addClass("bg-dark");
        $footer.css('color', 'rgb(255, 255, 255)' );
        $a.css('color', 'rgb(255, 255, 255)')
      }
        
});