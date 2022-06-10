import inputmask from 'inputmask'
const $phoneMask = document.querySelector('#phone')
const $phoneMaskmini = document.querySelector('#phone-mini')

if ($phoneMask) {
	inputmask({
		mask: '+7 (999) 999-99-99'
		// showMaskOnHover: false
	}).mask($phoneMask)
}
if ($phoneMaskmini) {
	inputmask({
		mask: '+7(999) 9999999'
		// showMaskOnHover: false
	}).mask($phoneMaskmini)
}
// jQuery(document).ready(($) => {
// 	// Callback form
// 	$('#callbackForm').simpleSendForm({
// 		autoClose: true
// 		// mailUrl: '../newquiz/form-submit/submit.php'
//
// 	}, () => {
// 		console.log('Событие перед отпрвкой формы')
// 	}, () => {
// 		console.log('Событие после отправки формы')
// 	})
// })
