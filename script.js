/* ===========================
   VeraLuxe Luxury Wellness
   =========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#f8f8f5;
    color:#333;
    line-height:1.6;
}

/* Header */

header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:#0b5d3b;
    color:white;
    position:sticky;
    top:0;
    z-index:1000;
}

.logo{
    font-size:30px;
    font-weight:bold;
    color:#FFD700;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 15px;
    font-weight:500;
    transition:.3s;
}

nav a:hover{
    color:#FFD700;
}

.header-right{
    display:flex;
    align-items:center;
    gap:15px;
}

#searchInput{
    padding:10px;
    border:none;
    border-radius:25px;
    width:220px;
}

.cart{
    background:#FFD700;
    color:#0b5d3b;
    padding:10px 18px;
    border-radius:30px;
    font-weight:bold;
    cursor:pointer;
}

/* Hero */

.hero{
    text-align:center;
    padding:90px 20px;
    background:linear-gradient(rgba(11,93,59,.75),rgba(11,93,59,.75)),
    url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=80');
    background-size:cover;
    background-position:center;
    color:white;
}

.hero h1{
    font-size:55px;
    margin-bottom:20px;
}

.hero p{
    max-width:700px;
    margin:auto;
    font-size:20px;
}

.shop-btn{
    display:inline-block;
    margin-top:30px;
    padding:15px 35px;
    background:#FFD700;
    color:#0b5d3b;
    text-decoration:none;
    border-radius:30px;
    font-weight:bold;
}

/* Products */

#products{
    padding:70px 8%;
}

#products h2{
    text-align:center;
    margin-bottom:40px;
    font-size:38px;
    color:#0b5d3b;
}

.product-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.product-card{
    background:white;
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 8px 20px rgba(0,0,0,.1);
    padding:20px;
    text-align:center;
    transition:.3s;
}

.product-card:hover{
    transform:translateY(-8px);
}

.product-card img{
    width:100%;
    border-radius:15px;
}

.product-card h3{
    margin:15px 0;
    color:#0b5d3b;
}

.product-card h4{
    color:#c79a00;
    margin:15px 0;
    font-size:24px;
}

.cart-btn,
.buy-btn,
.whatsapp-btn{
    display:block;
    width:100%;
    margin-top:12px;
    padding:12px;
    border:none;
    border-radius:10px;
    font-size:16px;
    cursor:pointer;
    text-decoration:none;
}

.cart-btn{
    background:#0b5d3b;
    color:white;
}

.buy-btn{
    background:#FFD700;
    color:#0b5d3b;
}

.whatsapp-btn{
    background:#25D366;
    color:white;
}

/* Footer */

footer{
    background:#0b5d3b;
    color:white;
    text-align:center;
    padding:30px;
    margin-top:60px;
}

/* Mobile */

@media(max-width:768px){

header{
flex-direction:column;
gap:20px;
}

nav{
display:flex;
flex-wrap:wrap;
justify-content:center;
}

.hero h1{
font-size:36px;
}

#searchInput{
width:100%;
}

.header-right{
width:100%;
flex-direction:column;
}

}
