// replace <div class="ad"></div> with proper ad code
let adDivs = document.querySelectorAll('.ad');
let adCount = 0;
for (let ad of adDivs) {
    adCount++;
    ad.outerHTML = `</div>
            </section>
        </article> 
    <div class="bg-light ad-block">
        <div class="container">
            <div class="col-md-12">
            <p class="ad-caption">Advertisement</p>
                <div class="ad-code">
                    <div id='div-gpt-ad-1512489859064-${adCount % 5 == 0 ? 5 : adCount % 5}' align="center">
                    <script>
                        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1512489859064-${adCount % 5 == 0 ? 5 : adCount % 5}'); }); 
                    </script>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        <article class="container">
            <section class="row justify-content-center">
                <div class="col-md-6">`;
}
