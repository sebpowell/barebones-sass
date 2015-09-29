(function($) { 
  $.fn.modal = function(options) {
    var closeModal, settings;
    settings = $.extend({
      targetElement: ".modal",
      modalShowClass: 'is-open',
      modalBackdropClass: '.modal-backdrop'
    }, options);
    // Center modals on screen. 
    this.each(function(index, element) {
      var modalWidth;
      modalWidth = $(element).outerWidth() / 2;
      $(this).css('margin-left', -modalWidth);
    });

    // Show target modal & add backdrop.
    $('nav').on('click', function(e) {
      var targetModal, targetModalID;
      alert("test");
      e.preventDefault();
      e.stopPropagation();
      targetModalID = $(this).data('modal');

      targetModal = $(settings.targetElement).filter(function() {
        return $(this).attr('id') === targetModalID;
      });

      targetModal.addClass(settings.modalShowClass);
      $(settings.modalBackdropClass).addClass(settings.modalShowClass);
      $('body').css('overflow', 'hidden');
    });

    function closeModal() {
      $(settings.targetElement).add(settings.modalBackdropClass).removeClass(settings.modalShowClass);
      $('body').css('overflow', 'hidden');
    };

    this.find('[data-modal = \'modal-close\']').click(function() {
      closeModal();
    });

    $(settings.modalBackdropClass).on('click', function(e) {
      closeModal();
    });
  };
})(jQuery);
