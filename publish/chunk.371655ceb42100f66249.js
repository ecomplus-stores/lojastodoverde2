(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{470:function(e,t,o){"use strict";o.r(t);var n=o(36),r=o(40);const a=n.$ecomConfig.get("currency")||"BRL",c=e=>{const t={currency:a,content_ids:[e.sku],content_name:e.name,value:Object(r.a)(e),content_type:"product"};return e.categories&&e.categories.length&&(t.content_category=e.category_tree||e.categories[0].name),t};o(8),o(3),o(15);var s=o(12),i=o(41);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof window.fbq){const o=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.debug&&console.log("fbq",t,o);const r=n?"trackCustom":"track";if(o.eventID){const e=o.eventID;delete o.eventID,window.fbq(r,t,o,{eventID:e})}else window.fbq(r,t,o)};(e=>{const t=window.storefront&&window.storefront.context;t&&"products"===t.resource&&e("ViewContent",c(t.body))})(o),((e,t)=>{const o=window.storefrontApp&&window.storefrontApp.router;if(o){let n,r,c;const d=e=>{const{amount:t}=e||window.storefrontApp,o={value:t&&t.total||s.a.data&&s.a.data.subtotal||0,currency:a,contents:[],content_type:"product"};return s.a.data&&Array.isArray(s.a.data.items)&&s.a.data.items.forEach((e=>{let{sku:t,quantity:n}=e;o.contents.push({id:t,quantity:n})})),o},u=(t,o)=>{const a=d(),c={...a,checkout_step:t,checkout_option:o};t<=1||!n?(e("InitiateCheckout",a),e("Checkout",c,!0),n=!0):r||(e("CheckoutOption",c,!0),r=!0)},l=(o,n)=>{if(!c&&window.localStorage.getItem("fbq.orderIdSent")!==o){let r,a,s;if(n)try{r=JSON.parse(n)}catch(e){r=null}a=r&&r.number?`${r.number}:r${parseInt(1e3*Math.random(),10)}`:o,Array.isArray(r.buyers)&&r.buyers.length&&(s=r.buyers[0]._id),!0!==t.disablePurchase&&e("Purchase",{...d(r),order_id:o,eventID:a,external_id:s}),i.a.requestApi(`/orders/${o}/metafields.json`,"POST",{namespace:"fb",field:"pixel",value:JSON.stringify({eventID:a,userAgent:navigator.userAgent})}),c=!0,window.localStorage.setItem("fbq.orderIdSent",o)}};let f;const p=e=>{let{name:t,params:o}=e;switch(t){case"cart":u(1,"Review Cart");break;case"checkout":u(2,"Confirm Purchase");break;case"confirmation":clearTimeout(f),o.json?l(o.id,decodeURIComponent(o.json)):f=setTimeout((()=>{o.json?l(o.id,decodeURIComponent(o.json)):l(o.id)}),o.json?1:1500)}};o.currentRoute&&p(o.currentRoute),o.afterEach(p)}})(o,e),t=o,s.a.on("addItem",(e=>{let{item:o}=e;t("AddToCart",c(o))}))}var t}}}]);