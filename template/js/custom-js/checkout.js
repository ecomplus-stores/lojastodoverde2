// Add your custom JavaScript for checkout here.
<script type="text/javascript">         
window.onload = clear();         
function clear() {                                
document.body.innerHTML = document.body.innerHTML.replace('Destinatário', 'Nome do guia');
document.body.innerHTML = document.body.innerHTML.replace('Complemento ', 'Ônibus e estacionamento');
document.body.innerHTML = document.body.innerHTML.replace('Referência  ', 'Data e hora');
}
</script>
