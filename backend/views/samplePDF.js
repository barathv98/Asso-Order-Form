module.exports = (name) => {
return `
<!doctype html>
<html>
    <head>
        <style>
        .border {
            border: 0.5px solid grey;
        }
        .flex {
            display: flex;
        }
        .flex-row {
            flex-direction: row;
        }
        .flex-column {
            flex-direction: column;
        }
        .width50 {
            width: 50%;
        }
        </style>
    </head>
    <body>
        <div class="border">
            <div class="flex">
              <div class="border width50">
                  <div>ASSOCIATE PRINTS</div>
                  <div>EDUCATIONAL PUBLISHERS</div>
                  <div>1370, P.K.N Road, SIVAKASI - 626 189</div>
                  <div>Ph : 04562 - 276943</div> 
                  <div>GST TIN No : 33AARFA7102N1ZA</div>
              </div>
              <div class="border width50">
                  <div class="border">
                      Bill No.:
                  </div>
                  <div class="border">
                      Order No.:
                  </div>
                  <div>
                    
                  </div>
              </div>
            </div>
        </div>
    </body>
</html>
    `;
};