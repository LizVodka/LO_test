const { test } = QUnit;

QUnit.module("ellenorzes", (hook) => {
    hook.before(() => {
        this.lojatek = new LOJatek(0);
    });

    test("létezik-e?", (assert) => {
        assert.ok(lojatek.ellenorzes, "létezik az ellenorzes");
    });
    test("függvény-e?", (assert) => {
        assert.ok(
            typeof lojatek.ellenorzes === "function",
            "létezik az ellenorzes és fvény"
        );
    });
    test("0 lámpa", (assert) => {
        assert.equal(lojatek.ellenorzes(), "0");
    });
    test("5 lámpa", (assert) => {
        this.lojatek = new LOJatek(5);
        assert.equal(lojatek.ellenorzes(), "5");
    });
    test("minden lámpa felkapcsolva", (assert) => {
        this.lojatek = new LOJatek(9);
        assert.equal(lojatek.ellenorzes(), "9");
    });
});

QUnit.module("szomszedokValtoztatasa", (h) => {
    h.beforeEach(() => {
        this.lojatek = new LOJatek(0);
    });

    test("létezik-e?", (assert) => {
        assert.ok(
            lojatek.szomszedokValtoztatasa,
            "létezik a szomszedokValtoztatasa"
        );
    });
    test("függvény-e?", (assert) => {
        assert.ok(
            typeof lojatek.szomszedokValtoztatasa === "function",
            "létezik a szomszedokValtoztatasa és fvény"
        );
    });
    test("középső lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(4);
        assert.equal(lampak[3].allapot, true);
        assert.equal(lampak[5].allapot, true);
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[7].allapot, true);
    });
    test("bal felső lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(0);
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[3].allapot, true);
    });
    test("jobb felső lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(2);
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[5].allapot, true);
    });
    test("bal alsó lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(6);
        assert.equal(lampak[3].allapot, true);
        assert.equal(lampak[7].allapot, true);
    });
    test("jobb alsó lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(8);
        assert.equal(lampak[7].allapot, true);
        assert.equal(lampak[5].allapot, true);
    });
    test("bal szélső lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(3);
        assert.equal(lampak[0].allapot, true);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[6].allapot, true);
    });
    test("jobb szélső lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(5);
        assert.equal(lampak[2].allapot, true);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[8].allapot, true);
    });
    test("első sor középső lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(1);
        assert.equal(lampak[0].allapot, true);
        assert.equal(lampak[2].allapot, true);
        assert.equal(lampak[4].allapot, true);
    });
    test("alsó sor középső lámpa kapcsolva", (assert) => {
        lojatek.szomszedokValtoztatasa(7);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[6].allapot, true);
        assert.equal(lampak[8].allapot, true);
    });
});
