let items=JSON.parse(localStorage.getItem('items')||'null')||[{id:1,code:'BRG-001',name:'Kertas A4',category:'ATK',stock:20,min:5},{id:2,code:'BRG-002',name:'Tinta Printer',category:'Elektronik',stock:4,min:5}];
let tx=JSON.parse(localStorage.getItem('tx')||'[]');
const $=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function save(){localStorage.setItem('items',JSON.stringify(items));localStorage.setItem('tx',JSON.stringify(tx));render()}
function render(){
 const q=$('search').value.trim().toLowerCase();
 $('sJenis').textContent=items.length;
 $('sStok').textContent=items.reduce((a,b)=>a+Number(b.stock),0);
 $('sLow').textContent=items.filter(x=>x.stock>0&&x.stock<=x.min).length;
 $('sOut').textContent=items.filter(x=>x.stock===0).length;
 const warningItems=items.filter(x=>x.stock<=x.min);
 $('warnings').innerHTML=warningItems.length?warningItems.map(x=>`<div><b>${esc(x.name)}</b> · <span class="${x.stock?'low':'out'}">${x.stock} tersisa</span></div>`).join(''):'Semua stok aman';
 $('rows').innerHTML=items.filter(x=>x.name.toLowerCase().includes(q)||x.code.toLowerCase().includes(q)).map(x=>`<tr><td>${esc(x.code)}</td><td>${esc(x.name)}</td><td>${esc(x.category)}</td><td>${x.stock}</td><td class="${x.stock===0?'out':x.stock<=x.min?'low':'ok'}">${x.stock===0?'Habis':x.stock<=x.min?'Menipis':'Aman'}</td><td><button onclick="del(${Number(x.id)})">Hapus</button></td></tr>`).join('');
 $('product').innerHTML=items.map(x=>`<option value="${Number(x.id)}">${esc(x.name)} (${x.stock})</option>`).join('');
 $('trxRows').innerHTML=tx.map(x=>`<tr><td>${new Date(x.date).toLocaleString('id-ID')}</td><td>${esc(x.name)}</td><td>${x.type==='IN'?'Masuk':'Keluar'}</td><td>${x.qty}</td><td>${x.after}</td></tr>`).join('');
}
function page(id){['dashboard','barang','transaksi'].forEach(x=>$(x).hidden=x!==id);$('title').textContent={dashboard:'Dashboard',barang:'Data Barang',transaksi:'Transaksi'}[id]}
function openItem(){$('itemForm').reset();$('itemDlg').showModal()}
function openTrx(){if(!items.length){alert('Tambahkan barang terlebih dahulu.');return}$('trxForm').reset();$('trxDlg').showModal()}
function del(id){const item=items.find(x=>x.id===id);if(item&&confirm(`Hapus ${item.name}?`)){items=items.filter(x=>x.id!==id);save()}}
$('itemForm').onsubmit=e=>{e.preventDefault();const code=$('code').value.trim(),name=$('itemName').value.trim(),category=$('category').value.trim(),stock=Number($('stock').value),min=Number($('minimum').value);if(!code||!name||!category||!Number.isInteger(stock)||stock<0||!Number.isInteger(min)||min<0){alert('Data barang tidak valid.');return}if(items.some(x=>x.code.toLowerCase()===code.toLowerCase())){alert('Kode barang sudah digunakan.');return}items.push({id:Date.now(),code,name,category,stock,min});save();$('itemDlg').close()};
$('trxForm').onsubmit=e=>{e.preventDefault();const item=items.find(x=>x.id===Number($('product').value)),qty=Number($('qty').value),type=$('type').value;if(!item){alert('Barang tidak ditemukan.');return}if(!Number.isInteger(qty)||qty<1){alert('Jumlah harus bilangan bulat minimal 1.');return}if(type==='OUT'&&qty>item.stock){alert('Stok tidak cukup.');return}item.stock+=type==='IN'?qty:-qty;tx.unshift({date:Date.now(),name:item.name,type,qty,after:item.stock});save();$('trxDlg').close()};
const USER='Gabriel',PASS='StockFlow123',MAX=3,LOCK=30000;
let timer;
const attempts=()=>Number(localStorage.getItem('attempts')||0),until=()=>Number(localStorage.getItem('locked')||0);
function showLoginError(message){$('error').textContent=message;$('error').style.display=message?'block':'none'}
function loginState(){clearTimeout(timer);const left=until()-Date.now();if(left>0){$('submit').disabled=true;$('submit').textContent=`Terkunci ${Math.ceil(left/1000)} detik`;$('attempt').textContent='Batas 3 percobaan tercapai';showLoginError('Terlalu banyak percobaan gagal.');timer=setTimeout(loginState,1000);return}if(until()){localStorage.removeItem('locked');localStorage.removeItem('attempts');showLoginError('')}$('submit').disabled=false;$('submit').textContent='Masuk →';$('attempt').textContent=`Kesempatan login: ${MAX-attempts()} kali`}
$('loginForm').onsubmit=e=>{e.preventDefault();if(until()>Date.now()){loginState();return}if($('name').value.trim().toLowerCase()===USER.toLowerCase()&&$('password').value===PASS){sessionStorage.setItem('auth','1');localStorage.removeItem('attempts');localStorage.removeItem('locked');$('login').classList.add('hide');showLoginError('');return}const n=attempts()+1;localStorage.setItem('attempts',n);$('password').value='';if(n>=MAX){localStorage.setItem('locked',Date.now()+LOCK)}else{showLoginError(`Nama atau password salah. Sisa: ${MAX-n}`)}loginState()};
$('show').onclick=()=>{$('password').type=$('password').type==='password'?'text':'password';$('show').textContent=$('password').type==='password'?'Lihat':'Sembunyi'};
$('logout').onclick=()=>{sessionStorage.removeItem('auth');$('login').classList.remove('hide');$('loginForm').reset();showLoginError('');loginState()};
if(sessionStorage.getItem('auth')==='1')$('login').classList.add('hide');
loginState();render();
