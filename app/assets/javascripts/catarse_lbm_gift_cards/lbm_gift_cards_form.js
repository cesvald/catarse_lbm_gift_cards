$("#catarse_lbm_gift_cards_form #accept_terms").on('change', function(){
  submit = $("#catarse_lbm_gift_cards_form input[type=submit]")
  if ($(this).is(':checked')) {
    submit.attr('disabled', false)
    submit.removeClass('disabled')
  } else {
    submit.attr('disabled', true)
    submit.addClass('disabled')
  }
})
