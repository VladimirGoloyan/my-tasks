class myPromise {
    constructor(executor){
        this.thenArr = [];
        this.errHandler = () => {}
        this.finalHandler = () => {}

        try{
            executor.call(null, this.myResolve.bind(this), this.myReject.bind(this))
        }catch(err){
            this.errHandler(err);
            console.log(`Error in myPromise constructor : ${err}`)
        }finally{
            this.finalHandler()
        }
    }

    myResolve(data){
        this.thenArr.forEach( callBack => {
            data = callBack(data);
        })

        this.finalHandler()
    }

    myReject(err){
        this.errHandler(err)

        this.finalHandler()
    }

    then(func){
        this.thenArr.push(func)
        return this
    }

    catch(func){
        this.errHandler = func
        return this
    }

    finally(func){
        this.finalHandler = func
        return this
    }

}

export default myPromise;