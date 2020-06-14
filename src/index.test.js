import {expect} from "chai";
import { describe } from "mocha";

describe('Our first test', ()=>{
    it('should pass', ()=>{
        expect(true).to.equal(true)
    });
});