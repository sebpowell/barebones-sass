(function($) {
  $.fn.modal = function(options) {
    var closeModal, settings;
    settings = $.extend({
      // TAke this from target element?
      targetElement: ".modal",
      modalShowClass: 'is-open',
      modalBackdropClass: '.modal-backdrop'
    }, options);

    $('[data-modal]').on('click', function(e) {
      var targetModal, targetModalID;
      e.preventDefault();
      e.stopPropagation();
      targetModalID = $(this).data('modal');
      targetModal = $(settings.targetElement).filter(function() {
        return $(this).attr('id') === targetModalID;
      });
      targetModal.addClass(settings.modalShowClass);
      targetModal.parents(".modal-wrapper").addClass(settings.modalShowClass);
      $(settings.modalBackdropClass).addClass(settings.modalShowClass);
      $('body').css('overflow', 'hidden');
    });

    closeModal = function() {
      $(settings.targetElement).add(settings.modalBackdropClass).removeClass(settings.modalShowClass);
      $(".modal-wrapper").removeClass(settings.modalShowClass);
      $('body').css('overflow', 'auto');
    };

    this.find('[data-modal = \'modal-close\']').click(function() {
      closeModal();
    });
    return $(".modal-backdrop").on('click', function(e) {
      closeModal();
    });
  };
})(jQuery);