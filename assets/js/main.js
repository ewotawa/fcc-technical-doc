function openNav() {
    document.getElementById('navbar').style.width = '250px';
    document.getElementById('main-doc').style.marginLeft = '250px';
    document.getElementById('footer').style.marginLeft = '250px';
    document.getElementById('open_button').style.display = 'none';
  }
  
  function closeNav() {
    document.getElementById('navbar').style.width = '0px';
    document.getElementById('main-doc').style.marginLeft = '0px';
    document.getElementById('footer').style.marginLeft = '0px';
    document.getElementById('open_button').style.display= 'block';
  }