import {expect} from "chai";
import { describe } from "mocha";
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', ()=>{
    it('should pass', ()=>{
        //asertion with chai
        expect(true).to.equal(true)
    });
});

//test to jsDom

describe('index.html', ()=>{
    it('should have h1 that says Users', (done)=>{
        //get the element to assert
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function (err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            //asertion
            expect(h1.innerHTML).to.equal("Users");
            done(); //add
            window.close();        
        });
    });
});