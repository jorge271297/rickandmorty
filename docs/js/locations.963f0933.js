(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["locations"],{"47ad":function(n,e,t){"use strict";t("82c8")},"7dee":function(n,e,t){"use strict";t.r(e);t("b0c0");var c=t("7a23"),a=Object(c["createVNode"])("h1",null,"Locations",-1),o={class:"data-list"};function r(n,e,t,r,i,l){return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[a,Object(c["createVNode"])("ul",o,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.locations,(function(n){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:n.id},Object(c["toDisplayString"])(n.name),1)})),128))])])}var i=t("abd9"),l={setup:function(){var n=Object(i["a"])("\n                query($page: Int) {\n                    data: locations(page: $page) {\n                            info {\n                            count\n                            pages\n                            next\n                            prev\n                        }\n                        results {\n                            id\n                            name\n                            type\n                            dimension\n                            created\n                        }\n                    }\n                }\n            "),e=n.results;return{locations:e}}};t("47ad");l.render=r;e["default"]=l},"82c8":function(n,e,t){}}]);
//# sourceMappingURL=locations.963f0933.js.map