﻿$(document).ready(function () {
    $('a').each(function () {
        var innerdata = $(this).text();
        if (innerdata.length > 0) {
            if (innerdata.toLowerCase() == "creciendo sanos")
                $(this).parent().hide();
            if (innerdata.toLowerCase() == "editor médico & consejo asesor editorial")
                $(this).parent().hide();
        }
    });
});