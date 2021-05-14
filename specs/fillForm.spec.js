describe('Fill form', function() {
    var firstName = element(by.id('firstName'));
    var lasName = element(by.id('lastName'));
    var email = element(by.id('userEmail'));
    var gender = element(by.xpath('/html/body/div/div/div/div[2]/div[2]/div[1]/form/div[3]/div[2]/div[1]/label'));
    var mobile = element(by.id('userNumber'));
    var dateOfBrith = element(by.id('dateOfBirthInput'));
    //var subjects = element(by.css('.css-yk16xz-control'));
    var hobbies = element(by.className('custom-control-label'));
    //var picture = element(by.id('uploadPicture'));
    var address = element(by.id('currentAddress'));
    var state = element(by.className('css-19bqh2r'));
    var stateOne = element(by.xpath(('/html/body/div/div/div/div[2]/div[2]/div[1]/form/div[10]/div[2]/div/div/div[1]/div[1]')));
    var buttonSaveStudent = element(by.className('btn btn-primary'));
    
    it('Fill and compare form', function(){
        browser.get('#/api');

        firstName.sendKeys('Bruno');
        lasName.sendKeys('Santos');
        email.sendKeys('bruno@gmail.com');
        gender.click();
        mobile.sendKeys('9999999999');
        dateOfBrith.click();
        //subjects.sendKeys('Ola mundo!');
        hobbies.click();
        //picture.click();
        address.sendKeys('Hello Word!');
        stateOne.click();
        state.click();
        buttonSaveStudent.click(); 

        expect(element(by.id('example-modal-sizes-title-lg')).getText()).toContain('Thanks for submitting the form');
        expect(element(by.id('closeLargeModal')).getText()).toContain('Close');

        expect(element(by.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[1]/td[2]')).getText()).toContain('Bruno Santos');
        expect(element(by.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[2]/td[2]')).getText()).toContain('bruno@gmail.com');
        expect(element(by.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[3]/td[2]')).getText()).toContain('Male');
        expect(element(by.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[4]/td[2]')).getText()).toContain('9999999999');
        expect(element(by.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[5]/td[2]')).getText()).toContain('13 May,2021');
        expect(element(by.xpath('/html/body/div/div/div/div[2]/div[2]/div[1]/form/div[7]/div[2]/div[1]/label')).getText()).toContain('Sports');
        expect(element(by.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[9]/td[2]')).getText()).toContain('Hello Word!');
        expect(element(by.xpath('/html/body/div/div/div/div[2]/div[2]/div[1]/form/div[10]/div[2]/div/div/div[1]/div[1]')).getText()).toContain('Select State');  
    });
});