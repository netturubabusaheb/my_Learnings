fetch('https://ipapi.co/json')
.then (response => response.json())
.then (data => {
   
    if(data) {
        var x="<tr>";
        x+= "<td>"+data.ip+"</td>";
        x+= "<td>"+data.network+"</td>";
        x+= "<td>"+data.version+"</td>";
        x+= "<td>"+data.city+"</td>";
        x+= "<td>"+data.region+"</td>";
        x+= "<td>"+data.country+"</td>";
        x+= "<td>"+data.country_name+"</td>";
        x+= "<td>"+data.country_code+"</td>";
        x+= "<td>"+data.country_code_iso3+"</td>";
        x+= "<td>"+data.country_capital+"</td>";
        x+= "<td>"+data.country_tld+"</td>";
        x+= "<td>"+data.continent_code+"</td>";
        x+= "<td>"+data.in_eu+"</td>";
        x+= "<td>"+data.postal+"</td>";
        x+= "<td>"+data.latitude+"</td>";
        x+= "<td>"+data.longitude+"</td>";
        x+= "<td>"+data.timezone+"</td>";
        x+= "<td>"+data.utc_offset+"</td>";
        x+= "<td>"+data.country_calling_code+"</td>";
        x+= "<td>"+data.currency+"</td>";
        x+= "<td>"+data.currency_name+"</td>";
        x+= "<td>"+data.languages+"</td>";
        x+= "<td>"+data.country_area+"</td>";
        x+= "<td>"+data.country_population+"</td>";
        x+= "<td>"+data.asn+"</td>";
        x+= "<td>"+data.org+"</td>";
        x+= "</tr>";
        document.getElementById('table').innerHTML=x;
    }
  
});
