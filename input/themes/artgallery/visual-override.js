/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
  let output = '';

  if (params.galleryItemGap !== '0.28333rem') {
    output += `   
         .gallery__item {
               padding: ${params.galleryItemGap}; 
         } 

         .gallery {   
               margin: calc(1.7rem + 1vw) -${params.galleryItemGap}; 
        }`;
  }

  if (params.submenu === 'custom') {
    output += `
        .navbar .navbar__submenu {
               width: ${params.submenuWidth}px; 
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
               left: ${params.submenuWidth}px;  
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
               left: -${params.submenuWidth}px; 
        }`;
  }

  if (params.galleryZoom !== true) {
    output += `   
      .pswp--zoom-allowed .pswp__img {
          cursor: default !important  
      }`;
  }

  if (params.lazyLoadEffect === 'fadein') {
    output += ` 
       img[loading] {
             opacity: 0;
       }

       img.is-loaded {
             opacity: 1;
             transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
       }`;
  }


  return output;
}

module.exports = generateOverride;
