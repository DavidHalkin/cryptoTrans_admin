'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const btnTrMoreUnfo = document.querySelectorAll('.toggle_show_js'),
		btnOperationCheck = document.querySelectorAll('.check_btn_js');

	btnTrMoreUnfo.forEach(element => {
		element.addEventListener('click', (event) => {
			event.preventDefault();
			element.closest('tr').nextElementSibling.classList.toggle('d-none');
		});
	});


	btnOperationCheck.forEach(element => {
		element.addEventListener('click', (event) => {
			event.preventDefault();
			element.classList.toggle('text-success');
		});
	});


	$('.table_js').DataTable({
		scrollY: '200px',
		scrollCollapse: true,
		// paging: false,
	});
	$('.unsearch_table_js').DataTable({
		scrollY: '200px',
		scrollCollapse: true,
		bFilter: false,
		bLengthChange: false,
		// paging: false,
	});
	$(document).on('shown.bs.tab', '[data-toggle="tab"]', function (e) {
		$.fn.dataTable.tables({
			visible: true,
			api: true
		}).columns.adjust();
	});
	$(document).on('shown.bs.modal', function (event) {
		$.fn.dataTable.tables({
			visible: true,
			api: true
		}).columns.adjust();
	});

});