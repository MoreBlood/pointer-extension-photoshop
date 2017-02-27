function pasteSmartObject(imgPath) {
	if (app.documents.length < 1){ /*alert("no document opened");*/ return;}

    try {
        var idPlc = charIDToTypeID("Plc ");
        var desc3 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        desc3.putPath(idnull, new File(imgPath));
        var idFTcs = charIDToTypeID("FTcs");
        var idQCSt = charIDToTypeID("QCSt");
        var idQcszero = charIDToTypeID("Qcs0");
        desc3.putEnumerated(idFTcs, idQCSt, idQcszero);
        var idOfst = charIDToTypeID("Ofst");
        var desc4 = new ActionDescriptor();
        var idHrzn = charIDToTypeID("Hrzn");
        var idPxl = charIDToTypeID("#Pxl");
        desc4.putUnitDouble(idHrzn, idPxl, 0);
        var idVrtc = charIDToTypeID("Vrtc");
        var idPxl = charIDToTypeID("#Pxl");
        desc4.putUnitDouble(idVrtc, idPxl, 0);
        desc3.putObject(idOfst, idOfst, desc4);
        executeAction(idPlc, desc3, DialogModes.NO);

    } catch(e) {
        alert(e.line + '\n' + e);
    }
}