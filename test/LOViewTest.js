const { test } = QUnit;

QUnit.module("felület tesztelése I.", (hook) => {
    test("Létrejön-e a megfelelő számú elem?", function (assert) {
        const szuloelem = $("#qunit-fixture article");
        assert.ok($("article div").length, 9);
    });
    test("Megfelelő lesz-e az elem ID-ja?", function (assert) {
        const szuloelem = $("#qunit-fixture article");
        assert.equal($("article div").eq(0).attr("dataId"), 0);
        assert.equal($("article div").eq(1).attr("dataId"), 1);
        assert.equal($("article div").eq(2).attr("dataId"), 2);
        assert.equal($("article div").eq(3).attr("dataId"), 3);
        assert.equal($("article div").eq(4).attr("dataId"), 4);
        assert.equal($("article div").eq(5).attr("dataId"), 5);
        assert.equal($("article div").eq(6).attr("dataId"), 6);
        assert.equal($("article div").eq(7).attr("dataId"), 7);
        assert.equal($("article div").eq(8).attr("dataId"), 8);
    });
    test("Megfelelő-lesz-e az elem háttérszíne?", function (assert) {
        const szuloelem = $("#qunit-fixture article");
        assert.ok($("article div").css("background-color"), "green");
    });
    test("Kattintásra megváltozik-e az adott elem színe?", function (assert) {
        const szuloelem = $("#qunit-fixture article");
        $("div").kattintasTrigger;
        assert.ok($("article div").css("background-color"), "orange");
    });
});

QUnit.module("felület tesztelése II.", (hook) => {
    hook.before(() => {
        this.lojatek = new LOJatek(0);
    });
    test("Megegyezik-e a lekapcsolt elemek száma a kiírással?", (assert) => {
        const szuloelem = $("#qunit-fixture article");
        sum = $(".infoSzoveg").val();
        assert.equal(lojatek.ellenorzes(), sum);
    });
});
