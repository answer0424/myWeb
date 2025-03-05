

const mediumCarLinks = {
    info1: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=2025+%EC%8F%98%EB%82%98%ED%83%80+%EC%A0%95%EB%B3%B4&oquery=2025+%EC%95%84%EB%B0%98%EB%96%BC+%EC%A0%95%EB%B3%B4&tqi=iyk38lqo1LVssCEtItRssssssFZ-379684',
    info2: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=31541718&qvt=0&query=2023%20G70%20%EC%A0%95%EB%B3%B4',
    info3: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=k5%EC%A0%95%EB%B3%B4&oquery=2025+k5%EC%A0%95%EB%B3%B4&tqi=iyk95dqo1Lwssubty50ssssst8Z-173183',
    info4: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=31580317&qvt=0&query=2024%20BMW%205%EC%8B%9C%EB%A6%AC%EC%A6%88%20%EC%A0%95%EB%B3%B4',
    info5: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=2024+BMW+4%EC%8B%9C%EB%A6%AC%EC%A6%88+%EC%A0%95%EB%B3%B4&oquery=2024+BMW+5%EC%8B%9C%EB%A6%AC%EC%A6%88+%EC%A0%95%EB%B3%B4&tqi=iyNcdlqVN8VssEwNkgosssssteK-493483',
    info6: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33497714&qvt=0&query=2024%20%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-%EB%B2%A4%EC%B8%A0%20C%ED%81%B4%EB%9E%98%EC%8A%A4%20%EC%A0%95%EB%B3%B4',
    info7: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=27254113&qvt=0&query=2022%20%ED%8F%AC%EB%A5%B4%EC%89%90%20%ED%8C%8C%EB%82%98%EB%A9%94%EB%9D%BC%20%EC%A0%95%EB%B3%B4',
    info8: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=34059946&qvt=0&query=2024%20%ED%8F%AD%EC%8A%A4%EB%B0%94%EA%B2%90%20%EC%A0%9C%ED%83%80%20%EC%A0%95%EB%B3%B4',
    info9: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=35064225&qvt=0&query=2024%20%EC%95%84%EC%9A%B0%EB%94%94%20A6%20%EC%A0%95%EB%B3%B4',
};

Array.from(document.getElementsByClassName('mediumCar')).forEach((element, index) => {
    element.addEventListener('click', function() {
        const key = `info${index + 1}`;
        window.open(mediumCarLinks[key], '_blank');
    });
});

const largeCarLinks = {
    info1: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=31632738&qvt=0&query=2024%20%ED%8C%B0%EB%A6%AC%EC%84%B8%EC%9D%B4%EB%93%9C%20%EC%A0%95%EB%B3%B4',
    info2: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=35162048&qvt=0&query=2025%20%EC%8F%98%EB%A0%8C%ED%86%A0%20%EC%A0%95%EB%B3%B4',
    info3: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=32184053&qvt=0&query=2024%20GV80%20%EC%A0%95%EB%B3%B4',
    info4: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=32288753&qvt=0&query=2024%20%EB%B3%BC%EB%B3%B4%20XC90%20%EC%A0%95%EB%B3%B4',
    info5: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33557661&qvt=0&query=2024%20%EC%95%84%EC%9A%B0%EB%94%94%20Q7%20%EC%A0%95%EB%B3%B4',
    info6: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33820449&qvt=0&query=2024%20%EC%BA%90%EB%94%9C%EB%9D%BD%20%EC%97%90%EC%8A%A4%EC%BB%AC%EB%A0%88%EC%9D%B4%EB%93%9C%20%EC%A0%95%EB%B3%B4',
    info7: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=31301014&qvt=0&query=2024%20%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-%EB%B2%A4%EC%B8%A0%20GLS%ED%81%B4%EB%9E%98%EC%8A%A4%20%EC%A0%95%EB%B3%B4',
    info8: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33555296&qvt=0&query=2024%20BMW%20XM%20%EC%A0%95%EB%B3%B4',
    info9: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=35431102&qvt=0&query=2025%20%EB%9E%9C%EB%93%9C%EB%A1%9C%EB%B2%84%20%EB%94%94%ED%8E%9C%EB%8D%94%20130%20%EC%A0%95%EB%B3%B4',
};

Array.from(document.getElementsByClassName('largeCar')).forEach((element, index) => {
    element.addEventListener('click', function() {
        const key = `info${index + 1}`;
        window.open(largeCarLinks[key], '_blank');
    });
});

const electricCarLinks = {
    info1: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33738233&qvt=0&query=2024%20%EC%BD%94%EB%82%98%20%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD%20%EC%A0%95%EB%B3%B4',
    info2: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=35083038&qvt=0&query=2025%20%EB%8B%88%EB%A1%9C%20EV%20%EC%A0%95%EB%B3%B4',
    info3: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33738249&qvt=0&query=2024%20%EC%95%84%EC%9D%B4%EC%98%A4%EB%8B%89%205%20%EC%A0%95%EB%B3%B4',
    info4: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=32087602&qvt=0&query=2024%20%ED%85%8C%EC%8A%AC%EB%9D%BC%20%EB%AA%A8%EB%8D%B83%20%EC%A0%95%EB%B3%B4',
    info5: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=10403913&qvt=0&query=2020%20%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-EQ%20EQC%20%EC%A0%95%EB%B3%B4',
    info6: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33656180&qvt=0&query=2025%20%ED%8F%AC%EB%A5%B4%EC%89%90%20%ED%83%80%EC%9D%B4%EC%B9%B8%20%ED%81%AC%EB%A1%9C%EC%8A%A4%20%ED%88%AC%EB%A6%AC%EC%8A%A4%EB%AA%A8%20%EC%A0%95%EB%B3%B4',
    info7: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=29066920&qvt=0&query=2023%20%EC%95%84%EC%9A%B0%EB%94%94%20e-%ED%8A%B8%EB%A1%A0%20%EC%A0%95%EB%B3%B4',
    info8: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=35413030&qvt=0&query=2025%20BMW%20i7%20%EC%A0%95%EB%B3%B4',
    info9: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=29664349&qvt=0&query=2023%20%EC%9E%AC%EA%B7%9C%EC%96%B4%20I-%ED%8E%98%EC%9D%B4%EC%8A%A4%20%EC%A0%95%EB%B3%B4',
};

Array.from(document.getElementsByClassName('electricCar')).forEach((element, index) => {
    element.addEventListener('click', function() {
        const key = `info${index + 1}`;
        window.open(electricCarLinks[key], '_blank');
    });
});

const sportsCarLinks = {
    info1: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=34327422&qvt=0&query=2025%20%EC%95%84%EB%B0%98%EB%96%BC%20N%20%EC%A0%95%EB%B3%B4',
    info2: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=29591383&qvt=0&query=2023%20%EC%8A%A4%ED%8C%85%EC%96%B4%20%EC%A0%95%EB%B3%B4',
    info3: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=13986345&qvt=0&query=2020%20%EB%B2%A8%EB%A1%9C%EC%8A%A4%ED%84%B0%20N%20%EC%A0%95%EB%B3%B4',
    info4: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=32234473&qvt=0&query=2024%20%ED%8F%AC%EB%A5%B4%EC%89%90%20911%20%ED%84%B0%EB%B3%B4%20%EC%B9%B4%EB%B8%8C%EB%A6%AC%EC%98%AC%EB%A0%88%20%EC%A0%95%EB%B3%B4',
    info5: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=10242517&qvt=0&query=amg%20gt63%20%EC%A0%95%EB%B3%B4',
    info6: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=16967723&qvt=0&query=2021%20%ED%8E%98%EB%9D%BC%EB%A6%AC%20488%20GT%20M%20%EC%A0%95%EB%B3%B4',
    info7: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=33635125&qvt=0&query=2025%20BMW%20M4%20%EC%BB%A8%EB%B2%84%ED%84%B0%EB%B8%94%20%EC%A0%95%EB%B3%B4',
    info8: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=17775344&qvt=0&query=2022%20%EC%95%84%EC%9A%B0%EB%94%94%20R8%20%EC%A0%95%EB%B3%B4',
    info9: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjg1&pkid=128&os=17717597&qvt=0&query=2021%20%EC%9E%AC%EA%B7%9C%EC%96%B4%20F-%ED%83%80%EC%9E%85%20%EC%BF%A0%ED%8E%98%20%EC%A0%95%EB%B3%B4',
};

Array.from(document.getElementsByClassName('sportsCar')).forEach((element, index) => {
    element.addEventListener('click', function() {
        const key = `info${index + 1}`;
        window.open(sportsCarLinks[key], '_blank');
    });
});

window.onscroll = function() {
    var goUpButton = document.getElementById("goUpButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goUpButton.style.display = "block";
    } else {
        goUpButton.style.display = "none";
    }
};

// 페이지 상단으로 스크롤하는 함수
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}