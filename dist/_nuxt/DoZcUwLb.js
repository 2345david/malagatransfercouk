import{_ as T,a as L}from"./jNLUUmJe.js";import{p as f,r as d,n as M,c as o,o as l,a,b as i,q as k,s as b,v as x,F as _,u as j,x as P,w as R,y as D,T as S,t as $,_ as C,z,d as w}from"./BD-1nfs3.js";import{_ as q,a as B,b as A,c as N,d as I}from"./BdU2nee9.js";import{_ as E}from"./OzRPlJon.js";const H=""+new URL("coches.DecKLt5p.mp4",import.meta.url).href,F=f("/miniplace.png"),W=f("/place.png"),G=f("/people.png"),O=f("/car.png"),Z={class:"relative h-screen w-full"},J={class:"absolute inset-0 -z-10 w-full h-full overflow-hidden"},X={key:0,autoplay:"",loop:"",muted:"",playsinline:"",class:"w-full h-full object-cover"},K={key:1,class:"w-full h-full bg-gray-800"},Y={class:"relative flex flex-col justify-center items-center h-full text-white px-6"},Q={class:"text-center"},aa={class:"grid grid-cols-5 gap-4 items-center"},ea={class:"flex items-center bg-gray-100 p-2 rounded"},ta=["value"],sa={class:"flex items-center bg-gray-100 p-2 rounded"},oa=["value"],la={class:"flex items-center bg-gray-100 p-2 rounded"},ra={class:"flex items-center bg-gray-100 p-2 rounded"},da={key:0,class:"fixed top-80 right-0 h-[calc(100%-rem)] w-64 bg-white shadow-lg p-4 flex flex-col items-center z-50"},U={__name:"hero",setup(y){const t=d(!1),v=d(!1),c=d("0"),u=d("0"),m=d(1),r=d("0"),p=d([{value:"8",label:"Malaga Aeropuerto"},{value:"44",label:"Malaga Center / Estación de Tren"},{value:"47",label:"Alhaurin el Grande"},{value:"10",label:"Alicante"},{value:"11",label:"Almería"},{value:"12",label:"Almuñécar"},{value:"14",label:"Benalmádena"},{value:"20",label:"Estepona"},{value:"22",label:"Fuengirola"},{value:"24",label:"Granada"},{value:"35",label:"Sevilla"}]),g=()=>{console.log({origen:c.value,destino:u.value,pasajeros:m.value,tipoViaje:r.value})};return M(()=>{const n=document.createElement("video");n.src="/coches.mp4",n.oncanplaythrough=()=>v.value=!0,n.onerror=()=>console.error("Error cargando el video")}),(n,e)=>(l(),o("div",Z,[a("div",J,[v.value?(l(),o("video",X,e[6]||(e[6]=[a("source",{src:H,type:"video/mp4"},null,-1)]))):(l(),o("div",K)),e[7]||(e[7]=a("div",{class:"absolute inset-0 bg-black bg-opacity-50"},null,-1))]),a("div",Y,[a("div",Q,[e[16]||(e[16]=a("h1",{class:"text-5xl font-bold"},"Transfer Desde/Hasta el aeropuerto de Málaga",-1)),e[17]||(e[17]=a("p",{class:"mt-4 text-lg"},"Último modelo de Vehículos de alta gama - ¡Reserva ahora!",-1)),a("form",{onSubmit:k(g,["prevent"]),class:"bg-white p-4 rounded-lg shadow-lg mt-6 max-w-4xl w-full mx-auto text-black"},[a("div",aa,[a("div",ea,[e[9]||(e[9]=a("img",{width:"20",src:F,alt:"Desde",class:"mr-2"},null,-1)),b(a("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>c.value=s),class:"w-full bg-transparent focus:outline-none"},[e[8]||(e[8]=a("option",{value:"0"},"Desde",-1)),(l(!0),o(_,null,j(p.value,(s,h)=>(l(),o("option",{key:h,value:s.value},$(s.label),9,ta))),128))],512),[[x,c.value]])]),a("div",sa,[e[11]||(e[11]=a("img",{width:"20",src:W,alt:"Hasta",class:"mr-2"},null,-1)),b(a("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>u.value=s),class:"w-full bg-transparent focus:outline-none"},[e[10]||(e[10]=a("option",{value:"0"},"Hasta",-1)),(l(!0),o(_,null,j(p.value,(s,h)=>(l(),o("option",{key:h,value:s.value},$(s.label),9,oa))),128))],512),[[x,u.value]])]),a("div",la,[e[12]||(e[12]=a("img",{width:"20",src:G,alt:"Pasajeros",class:"mr-2"},null,-1)),b(a("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),type:"number",min:"1",class:"w-full bg-transparent focus:outline-none",placeholder:"Nº Pasajeros"},null,512),[[P,m.value]])]),a("div",ra,[e[14]||(e[14]=a("img",{width:"20",src:O,alt:"Tipo de Viaje",class:"mr-2"},null,-1)),b(a("select",{"onUpdate:modelValue":e[3]||(e[3]=s=>r.value=s),class:"w-full bg-transparent focus:outline-none"},e[13]||(e[13]=[a("option",{value:"0"},"Viaje de Ida",-1),a("option",{value:"1"},"Ida y Vuelta",-1)]),512),[[x,r.value]])]),e[15]||(e[15]=a("button",{type:"submit",class:"bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full"}," Reservar ",-1))])],32)])]),a("button",{onClick:e[4]||(e[4]=s=>t.value=!t.value),class:"fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-blue-700 transition"}," ☰ "),i(S,{name:"slide"},{default:R(()=>[t.value?(l(),o("div",da,[a("button",{onClick:e[5]||(e[5]=s=>t.value=!1),class:"self-end text-gray-600 text-2xl"},"✖"),e[18]||(e[18]=a("div",{class:"mt-6 space-y-4"},[a("div",{class:"flex items-center space-x-2"},[a("img",{width:"20px",src:q,alt:"Teléfono"}),a("p",{class:"text-gray-700"},"+34 639 622 226")]),a("div",{class:"flex items-center space-x-2"},[a("img",{width:"20px",src:B,alt:"Correo"}),a("p",{class:"text-gray-700"},"juanramos648@gmail.com")]),a("div",{class:"flex justify-center space-x-4 mt-4"},[a("a",{href:"#",target:"_blank"},[a("img",{width:"40px",src:A,alt:"Facebook"})]),a("a",{href:"https://www.instagram.com/davurg_06/",target:"_blank"},[a("img",{width:"35px",src:N,alt:"Instagram"})]),a("a",{href:"https://wa.me/679219416",target:"_blank"},[a("img",{width:"40px",src:I,alt:"WhatsApp"})])])],-1))])):D("",!0)]),_:1})]))}},na=""+new URL("fotoCoche.DXH-XS4L.jpg",import.meta.url).href,ia=""+new URL("mercedesFoto.bIIlZSmS.jpg",import.meta.url).href,ca=""+new URL("coche1.jC0oHolH.jpg",import.meta.url).href,ua=""+new URL("coche2.DojzwZfu.jpg",import.meta.url).href,ma=""+new URL("coche3.a6Hytx9d.jpg",import.meta.url).href,va=""+new URL("coche4.C0v-q8t6.jpg",import.meta.url).href,pa=""+new URL("coche5.DykEVM9l.jpeg",import.meta.url).href,ba=""+new URL("coche6.P_fsT5Sm.jpg",import.meta.url).href,fa=""+new URL("money.B_qMRo51.png",import.meta.url).href,ga=""+new URL("driver.BuzWyJy9.png",import.meta.url).href,ha=""+new URL("wifi.DyYc9n87.png",import.meta.url).href,xa=""+new URL("suit.32qCZBLE.png",import.meta.url).href,wa=""+new URL("caricon.DrVbwW78.png",import.meta.url).href,_a=""+new URL("water.D4ItoP6l.png",import.meta.url).href,ya={name:"Description"},ja={class:"bg-gray-100 py-16 px-6"},$a={class:"container mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8"},Ta={class:"md:w-1/2"};function La(y,t,v,c,u,m){const r=E;return l(),o(_,null,[a("section",ja,[a("div",$a,[a("div",Ta,[t[1]||(t[1]=a("h2",{class:"text-3xl font-bold text-gray-900 mb-4"}," Transporte desde/hasta el Aeropuerto de Málaga ",-1)),t[2]||(t[2]=a("p",{class:"text-gray-700 mb-4"},[w(" Bienvenidos a "),a("strong",null,"Prestigue Málaga Transfer"),w(". Somos una empresa de transporte especializada en "),a("strong",null,"Transfer"),w(" y transporte de personas. Tenemos amplia experiencia en el sector turístico, lo que nos permite mejorar nuestro servicio día a día para satisfacer a nuestros clientes. ")],-1)),i(r,{to:"/sobreNosotros"},{default:R(()=>t[0]||(t[0]=[a("button",{class:"bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"}," Más sobre nosotros ",-1)])),_:1})]),t[3]||(t[3]=a("div",{class:"md:w-1/2 flex gap-4"},[a("img",{class:"w-72 h-48 rounded-lg shadow-lg",src:na,alt:"Coche de lujo"}),a("img",{class:"w-72 h-48 rounded-lg shadow-lg",src:ia,alt:"Mercedes Benz"})],-1))])]),t[4]||(t[4]=z('<section class="py-16 px-6 bg-gray-200" data-v-70f4b18d><div class="container mx-auto text-center mb-12" data-v-70f4b18d><div class="infoPrecio mb-8" data-v-70f4b18d><div class="todoIncluido" data-v-70f4b18d><h1 class="text-3xl font-bold mb-4" data-v-70f4b18d>Precio Todo Incluido</h1><span data-v-70f4b18d>Ofrecemos un <strong data-v-70f4b18d>amplio servicio</strong>, como por ejemplo los lugares más famosos de Andalucía: Málaga, Marbella, Puerto Banús, Ronda, Jerez, Córdoba, Granada, Sevilla ...</span><br data-v-70f4b18d><span data-v-70f4b18d>Todos nuestros servicios cuentan con un <strong data-v-70f4b18d>precio todo incluido</strong>: Peajes, agua, wifi, etc...</span></div></div><div class="cajas grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-v-70f4b18d><div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out" data-v-70f4b18d><img class="w-full h-48 object-cover rounded-md mb-4" src="'+ca+'" data-v-70f4b18d><h3 class="text-xl font-bold mb-2" data-v-70f4b18d>Transfer desde/hasta el Aeropuerto de Málaga</h3><p data-v-70f4b18d>Realizamos Transfers desde el Aeropuerto de Málaga hasta cualquier destino y viceversa.</p></div><div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out" data-v-70f4b18d><img class="w-full h-48 object-cover rounded-md mb-4" src="'+ua+'" data-v-70f4b18d><h3 class="text-xl font-bold mb-2" data-v-70f4b18d>Transfer desde la Estación de Tren</h3><p data-v-70f4b18d>Ponemos a tu disposición servicios de transfers desde la Estación de Tren de Málaga hasta cualquier destino y viceversa.</p></div><div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out" data-v-70f4b18d><img class="w-full h-48 object-cover rounded-md mb-4" src="'+ma+'" data-v-70f4b18d><h3 class="text-xl font-bold mb-2" data-v-70f4b18d>Alquiler de Coche con Conductor</h3><p data-v-70f4b18d>Ofrecemos nuestros vehículos con conductor a disposición por horas para fiestas, cenas, bodas o cualquier ocasión.</p></div><div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out" data-v-70f4b18d><img class="w-full h-48 object-cover rounded-md mb-4" src="'+va+'" data-v-70f4b18d><h3 class="text-xl font-bold mb-2" data-v-70f4b18d>Visitas Turísticas</h3><p data-v-70f4b18d>Contamos con visitas a los puntos de mayor interés turístico de Andalucía como Marbella, Granada, Córdoba o Sevilla.</p></div><div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out" data-v-70f4b18d><img class="w-full h-48 object-cover rounded-md mb-4" src="'+pa+'" data-v-70f4b18d><h3 class="text-xl font-bold mb-2" data-v-70f4b18d>Bodas</h3><p data-v-70f4b18d>Realizamos servicios de transporte para Bodas. Para que puedas disfrutar de la celebración sin preocuparte por el coche.</p></div><div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out" data-v-70f4b18d><img class="w-full h-48 object-cover rounded-md mb-4" src="'+ba+'" data-v-70f4b18d><h3 class="text-xl font-bold mb-2" data-v-70f4b18d>Negocios</h3><p data-v-70f4b18d>Ofrecemos servicios de conductor para Negocios con vehículos de alta gama para que llegues a tiempo a reuniones, citas y eventos.</p></div></div></div></section><section class="bg-gray-400 py-16 px-6" data-v-70f4b18d><div class="container mx-auto text-center" data-v-70f4b18d><h2 class="text-4xl font-semibold mb-4" data-v-70f4b18d>¿Por qué elegirnos?</h2><p class="text-lg text-white mb-8" data-v-70f4b18d>Te ofrecemos las mejores ventajas</p><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-v-70f4b18d><div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg" data-v-70f4b18d><img class="w-16 h-16 mx-auto mb-4" src="'+fa+'" alt="Precios todo incluido" data-v-70f4b18d><h3 class="text-xl font-bold mb-3" data-v-70f4b18d>Precios todo incluido</h3><p class="text-gray-700" data-v-70f4b18d>Sin sorpresas, todo lo que necesitas está incluido en el precio.</p></div><div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg" data-v-70f4b18d><img class="w-16 h-16 mx-auto mb-4" src="'+ga+'" alt="Conductores con idiomas" data-v-70f4b18d><h3 class="text-xl font-bold mb-3" data-v-70f4b18d>Conductores con idiomas</h3><p class="text-gray-700" data-v-70f4b18d>Nuestros conductores hablan varios idiomas para tu comodidad.</p></div><div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg" data-v-70f4b18d><img class="w-16 h-16 mx-auto mb-4" src="'+ha+'" alt="Wifi" data-v-70f4b18d><h3 class="text-xl font-bold mb-3" data-v-70f4b18d>Wifi</h3><p class="text-gray-700" data-v-70f4b18d>Disfruta de Wifi gratis durante el trayecto.</p></div><div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg" data-v-70f4b18d><img class="w-16 h-16 mx-auto mb-4" src="'+xa+'" alt="Servicios VIP" data-v-70f4b18d><h3 class="text-xl font-bold mb-3" data-v-70f4b18d>Servicios VIP</h3><p class="text-gray-700" data-v-70f4b18d>Te ofrecemos un servicio de alta gama y atención personalizada.</p></div><div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg" data-v-70f4b18d><img class="w-16 h-16 mx-auto mb-4" src="'+wa+'" alt="Limpieza de coche" data-v-70f4b18d><h3 class="text-xl font-bold mb-3" data-v-70f4b18d>Limpieza de coche</h3><p class="text-gray-700" data-v-70f4b18d>Cada servicio incluye la limpieza del vehículo.</p></div><div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg" data-v-70f4b18d><img class="w-16 h-16 mx-auto mb-4" src="'+_a+'" alt="Botella de agua" data-v-70f4b18d><h3 class="text-xl font-bold mb-3" data-v-70f4b18d>Botella de agua</h3><p class="text-gray-700" data-v-70f4b18d>Te ofrecemos una botella de agua durante el viaje.</p></div></div></div></section><section class="py-16 px-6 bg-gray-100" data-v-70f4b18d><div class="container mx-auto text-center mb-12" data-v-70f4b18d><div class="textInformation mb-8" data-v-70f4b18d><h1 class="text-3xl font-bold text-gray-900" data-v-70f4b18d>¿Tienes dudas?</h1></div><div class="explicacion" data-v-70f4b18d><p class="text-lg text-gray-700 mb-6" data-v-70f4b18d> Si te has quedado con alguna duda sobre nosotros puedes contactarnos pinchando<br data-v-70f4b18d> el siguiente botón donde te redirigirá al correo electrónico,<br data-v-70f4b18d> o si no, visita el apartado de formularios y desde ahí haz tu reserva o contáctanos con tus datos <br data-v-70f4b18d> y hablaremos con usted lo antes posible, muchas gracias. </p><a href="mailto:ramosgarciad62@gmail.com" class="email-button" data-v-70f4b18d><button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition" data-v-70f4b18d> Enviar Correo </button></a></div></div></section>',3))],64)}const V=C(ya,[["render",La],["__scopeId","data-v-70f4b18d"]]),Ra={name:"defaultLayout",components:{Navbar:L,Hero:U,Description:V,Footer:T}};function Ca(y,t,v,c,u,m){const r=L,p=U,g=V,n=T;return l(),o("div",null,[i(r),i(p),i(g),i(n)])}const Pa=C(Ra,[["render",Ca]]);export{Pa as default};
