import util from '../lib/util';

export default util.Class({
    init($el)
    {
        this._$el = $el;
    },
    show()
    {
        this._$el.show();

        return this;
    },
    hide()
    {
        this._$el.hide();

        return this;
    },
    destroy() 
    {
        this._$el.remove();
    }
});