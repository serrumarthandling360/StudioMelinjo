(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"mouseWheelEnabled":true,"scrollBarWidth":10,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_3B7C2C18_34B1_566B_41A6_DFD4EE0A72B5_mobile], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_3B7DFC18_34B1_566B_41BC_9054ACFB5009_mobile].forEach(function(component) { component.set('visible', false); }) }","propagateClick":false,"paddingBottom":0,"backgroundOpacity":1,"gap":10,"width":"100%","paddingLeft":0,"id":"rootPlayer","scrollBarColor":"#000000","verticalAlign":"top","scrollBarOpacity":0.5,"left":790.4,"borderRadius":0,"contentOpaque":false,"scripts":{"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setValue":TDV.Tour.Script.setValue,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPixels":TDV.Tour.Script.getPixels,"unregisterKey":TDV.Tour.Script.unregisterKey,"registerKey":TDV.Tour.Script.registerKey,"init":TDV.Tour.Script.init,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setLocale":TDV.Tour.Script.setLocale,"getMainViewer":TDV.Tour.Script.getMainViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"shareSocial":TDV.Tour.Script.shareSocial,"isPanorama":TDV.Tour.Script.isPanorama,"getKey":TDV.Tour.Script.getKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playAudioList":TDV.Tour.Script.playAudioList,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openLink":TDV.Tour.Script.openLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initGA":TDV.Tour.Script.initGA,"quizStart":TDV.Tour.Script.quizStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentByName":TDV.Tour.Script.getComponentByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showWindow":TDV.Tour.Script.showWindow,"translate":TDV.Tour.Script.translate,"cloneCamera":TDV.Tour.Script.cloneCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers},"toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"horizontalAlign":"left","buttonToggleMute":"this.IconButton_3B7DDC18_34B1_566B_41A6_4E1B6F937F73_mobile","borderSize":0,"paddingRight":0,"definitions": [{"levels":[{"url":"media/res_397AA2F6_34F1_53A7_41A9_7B35B0D62C43_3.jpg","width":512,"class":"ImageResourceLevel","height":307},{"url":"media/res_397AA2F6_34F1_53A7_41A9_7B35B0D62C43_2.jpg","width":1024,"class":"ImageResourceLevel","height":615}],"id":"res_397AA2F6_34F1_53A7_41A9_7B35B0D62C43","data":{"extraLevels":[{"url":"media/res_397AA2F6_34F1_53A7_41A9_7B35B0D62C43_1.jpg","width":2048,"class":"ImageResourceLevel","height":1230},{"url":"media/res_397AA2F6_34F1_53A7_41A9_7B35B0D62C43_0.jpg","width":3508,"class":"ImageResourceLevel","height":2108}]},"class":"ImageResource"},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"scrollBarWidth":5,"width":55,"paddingLeft":0,"id":"Container_3B7CCC17_34B1_5665_41C5_38BC59221192_mobile","gap":5,"verticalAlign":"middle","right":"0%","scrollBarOpacity":0.5,"paddingRight":0,"borderRadius":0,"children":["this.IconButton_3B7C4C18_34B1_566B_41C8_2B4B59F02766_mobile"],"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"top":"0%","contentOpaque":false,"height":55,"layout":"horizontal","scrollBarMargin":1,"overflow":"visible","minHeight":1,"minWidth":1,"class":"Container","shadow":false,"data":{"name":"button menu sup"},"paddingTop":0,"scrollBarVisible":"rollOver","scrollBarColor":"#000000"},{"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_3E4E3513_344F_767D_41BF_805D797102E0"},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"width":30,"paddingLeft":0,"id":"IconButton_3B7C4C18_34B1_566B_41C8_2B4B59F02766_mobile","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","transparencyActive":true,"borderSize":0,"pressedIconURL":"skin/IconButton_3B7C4C18_34B1_566B_41C8_2B4B59F02766_pressed.png","height":30,"maxWidth":30,"click":"if(!this.Container_3B7C0C18_34B1_566B_41C7_8D80E7318E12_mobile.get('visible')){ this.setComponentVisibility(this.Container_3B7C0C18_34B1_566B_41C7_8D80E7318E12_mobile, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_3B7C0C18_34B1_566B_41C7_8D80E7318E12_mobile, false, 0, null, null, false) }","mode":"toggle","minHeight":1,"maxHeight":30,"pressedRollOverIconURL":"skin/IconButton_3B7C4C18_34B1_566B_41C8_2B4B59F02766_pressed_rollover.png","minWidth":1,"class":"IconButton","shadow":false,"iconURL":"skin/IconButton_3B7C4C18_34B1_566B_41C8_2B4B59F02766.png","data":{"name":"image button menu"},"paddingTop":0,"cursor":"hand"},{"propagateClick":false,"paddingBottom":0,"backgroundOpacity":0,"left":"1.9%","width":"12.958%","paddingLeft":0,"id":"Image_3B719CD8_34B0_D7EB_41B3_AE7DAE004781_mobile","verticalAlign":"middle","url":"skin/Image_3B719CD8_34B0_D7EB_41B3_AE7DAE004781.png","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"top":"0.97%","height":"8.703%","minHeight":1,"minWidth":1,"shadow":false,"class":"Image","data":{"name":"Image9510"},"paddingTop":0,"scaleMode":"fit_inside"},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"width":29,"paddingLeft":0,"id":"IconButton_3B7DCC18_34B1_566B_41A0_9C1E0C82F96C_mobile","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","transparencyActive":true,"borderSize":0,"pressedIconURL":"skin/IconButton_3B7DCC18_34B1_566B_41A0_9C1E0C82F96C_pressed.png","height":29,"maxWidth":29,"mode":"toggle","minHeight":1,"maxHeight":29,"pressedRollOverIconURL":"skin/IconButton_3B7DCC18_34B1_566B_41A0_9C1E0C82F96C_pressed_rollover.png","minWidth":1,"class":"IconButton","shadow":false,"iconURL":"skin/IconButton_3B7DCC18_34B1_566B_41A0_9C1E0C82F96C.png","data":{"name":"IconButton HS "},"paddingTop":0,"cursor":"hand"},{"showDuration":500,"hideEasing":"cubic_out","class":"PopupPanoramaOverlay","showEasing":"cubic_in","rotationZ":0,"rotationY":0,"popupMaxHeight":"95%","rotationX":0,"popupDistance":100,"hideDuration":500,"popupMaxWidth":"95%","id":"popup_39FDF0C4_34F1_AFDB_41C5_88ED284366F0","image":"this.res_397AA2F6_34F1_53A7_41A9_7B35B0D62C43","pitch":10.73,"hfov":25.76,"yaw":-45.39},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"width":29,"paddingLeft":0,"id":"IconButton_3B7DDC18_34B1_566B_41A6_4E1B6F937F73_mobile","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","transparencyActive":true,"borderSize":0,"pressedIconURL":"skin/IconButton_3B7DDC18_34B1_566B_41A6_4E1B6F937F73_pressed.png","height":29,"maxWidth":29,"mode":"toggle","minHeight":1,"maxHeight":29,"pressedRollOverIconURL":"skin/IconButton_3B7DDC18_34B1_566B_41A6_4E1B6F937F73_pressed_rollover.png","minWidth":1,"class":"IconButton","shadow":false,"iconURL":"skin/IconButton_3B7DDC18_34B1_566B_41A6_4E1B6F937F73.png","data":{"name":"IconButton MUTE"},"paddingTop":0,"cursor":"hand"},{"closeButtonBorderRadius":11,"closeButtonPressedBackgroundColor":[],"data":{"name":"Window11770"},"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"shadowBlurRadius":6,"gap":10,"titleFontColor":"#000000","scrollBarOpacity":0.5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"backgroundOpacity":1,"closeButtonPaddingRight":0,"closeButtonRollOverBackgroundColor":[],"titleFontFamily":"Arial","closeButtonBackgroundColorRatios":[],"titlePaddingBottom":5,"id":"window_2505B722_34B3_525F_41B8_2B651540A8CB","titleFontSize":"1.29vmin","headerBackgroundOpacity":0,"closeButtonIconColor":"#B2B2B2","toolTipHorizontalAlign":"center","closeButtonPressedBackgroundColorRatios":[],"shadowVerticalLength":0,"bodyPaddingRight":0,"horizontalAlign":"center","closeButtonRollOverIconLineWidth":2,"headerPaddingLeft":10,"borderSize":0,"modal":true,"titlePaddingTop":5,"veilColor":["#000000","#000000"],"closeButtonIconHeight":20,"backgroundColor":[],"footerBackgroundColorDirection":"vertical","closeButtonPaddingBottom":0,"bodyBackgroundOpacity":0,"scrollBarMargin":2,"veilColorDirection":"horizontal","closeButtonPressedIconLineWidth":3,"overflow":"scroll","width":"70%","backgroundColorDirection":"vertical","footerHeight":5,"shadow":true,"closeButtonPressedIconColor":"#FFFFFF","hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonPressedBorderColor":"#000000","veilColorRatios":[0,1],"headerPaddingBottom":5,"headerPaddingRight":0,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"scrollBarVisible":"rollOver","paddingTop":0,"paddingBottom":0,"headerVerticalAlign":"middle","height":"70%","veilOpacity":0.4,"scrollBarColor":"#000000","shadowSpread":1,"propagateClick":false,"children":["this.WebFrame_258EFC2D_34B1_56A5_41C7_159DCD70A307"],"footerBackgroundColorRatios":[0,0.9,1],"contentOpaque":false,"closeButtonPressedBorderSize":0,"paddingLeft":0,"verticalAlign":"middle","closeButtonBorderColor":"#000000","closeButtonRollOverBorderSize":0,"shadowColor":"#000000","closeButtonIconLineWidth":2,"bodyPaddingBottom":0,"paddingRight":0,"borderRadius":5,"shadowOpacity":0.5,"closeButtonPaddingLeft":0,"backgroundColorRatios":[],"bodyBackgroundColorRatios":[0,0.5,1],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"shadowHorizontalLength":3,"closeButtonRollOverBorderColor":"#000000","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingRight":5,"layout":"vertical","closeButtonPaddingTop":0,"closeButtonRollOverIconColor":"#FFFFFF","bodyBackgroundColorDirection":"vertical","titlePaddingLeft":5,"bodyPaddingTop":0,"headerBackgroundColorRatios":[0,0.1,1],"minHeight":20,"minWidth":20,"bodyPaddingLeft":0,"closeButtonBackgroundColor":[],"class":"Window","headerBackgroundColorDirection":"vertical","veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"scrollBarWidth":10,"closeButtonIconWidth":20,"footerBackgroundOpacity":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"headerPaddingTop":10,"closeButtonBorderSize":0},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"width":29,"paddingLeft":0,"id":"IconButton_3B7C3C18_34B1_566B_419B_AC90942C2427_mobile","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","rollOverIconURL":"skin/IconButton_3B7C3C18_34B1_566B_419B_AC90942C2427_rollover.png","transparencyActive":true,"borderSize":0,"height":29,"maxWidth":29,"mode":"push","minHeight":1,"maxHeight":29,"minWidth":1,"class":"IconButton","shadow":false,"iconURL":"skin/IconButton_3B7C3C18_34B1_566B_419B_AC90942C2427.png","data":{"name":"IconButton VR"},"paddingTop":0,"cursor":"hand"},{"items":[{"media":"this.panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_camera"}],"id":"mainPlayList","class":"PlayList"},{"scrollBarWidth":5,"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"visible":false,"children":["this.IconButton_3B7C3C18_34B1_566B_419B_AC90942C2427_mobile","this.IconButton_3B7C2C18_34B1_566B_41A6_DFD4EE0A72B5_mobile","this.IconButton_3B7DDC18_34B1_566B_41A6_4E1B6F937F73_mobile","this.IconButton_3B7DCC18_34B1_566B_41A0_9C1E0C82F96C_mobile","this.IconButton_3B7DFC18_34B1_566B_41BC_9054ACFB5009_mobile"],"paddingLeft":0,"id":"Container_3B7C0C18_34B1_566B_41C7_8D80E7318E12_mobile","gap":1,"verticalAlign":"top","right":"0%","scrollBarOpacity":0.5,"paddingRight":0,"borderRadius":0,"contentOpaque":false,"toolTipHorizontalAlign":"center","horizontalAlign":"center","width":"91.304%","borderSize":0,"bottom":"0%","scrollBarMargin":1,"layout":"vertical","overflow":"scroll","height":"85.959%","minHeight":1,"minWidth":1,"class":"Container","shadow":false,"data":{"name":"-button set"},"paddingTop":0,"scrollBarVisible":"rollOver","scrollBarColor":"#000000"},{"closeButtonBorderRadius":11,"closeButtonPressedBackgroundColor":[],"data":{"name":"Window4210"},"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"shadowBlurRadius":6,"gap":10,"titleFontColor":"#000000","scrollBarOpacity":0.5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"backgroundOpacity":1,"closeButtonPaddingRight":0,"closeButtonRollOverBackgroundColor":[],"titleFontFamily":"Arial","closeButtonBackgroundColorRatios":[],"titlePaddingBottom":5,"id":"window_24816F99_34F1_526D_41C1_8A315664EE46","titleFontSize":"1.29vmin","headerBackgroundOpacity":0,"closeButtonIconColor":"#B2B2B2","toolTipHorizontalAlign":"center","closeButtonPressedBackgroundColorRatios":[],"closeButtonPressedBackgroundOpacity":0,"bodyPaddingRight":0,"horizontalAlign":"center","closeButtonRollOverIconLineWidth":2,"headerPaddingLeft":10,"borderSize":0,"modal":true,"titlePaddingTop":5,"shadowVerticalLength":0,"veilColor":["#000000","#000000"],"closeButtonIconHeight":20,"closeButtonBackgroundOpacity":0,"backgroundColor":[],"footerBackgroundColorDirection":"vertical","closeButtonPaddingBottom":0,"bodyBackgroundOpacity":0,"scrollBarMargin":2,"veilColorDirection":"horizontal","closeButtonPressedIconLineWidth":3,"overflow":"scroll","width":"30%","backgroundColorDirection":"vertical","footerHeight":5,"closeButtonRollOverBackgroundOpacity":0,"shadow":true,"closeButtonPressedIconColor":"#FFFFFF","hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonPressedBorderColor":"#000000","veilColorRatios":[0,1],"headerPaddingBottom":5,"headerPaddingRight":0,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"scrollBarVisible":"rollOver","paddingTop":0,"paddingBottom":0,"headerVerticalAlign":"middle","height":"90%","veilOpacity":0.4,"scrollBarColor":"#000000","shadowSpread":1,"propagateClick":false,"children":["this.WebFrame_258E3C2E_34B1_56A7_41BE_E545EC17EAFA"],"footerBackgroundColorRatios":[0,0.9,1],"contentOpaque":false,"closeButtonPressedBorderSize":0,"paddingLeft":0,"verticalAlign":"middle","closeButtonBorderColor":"#000000","closeButtonRollOverBorderSize":0,"shadowColor":"#000000","closeButtonIconLineWidth":2,"bodyPaddingBottom":0,"paddingRight":0,"borderRadius":5,"shadowOpacity":0.5,"closeButtonPaddingLeft":0,"backgroundColorRatios":[],"bodyBackgroundColorRatios":[0,0.5,1],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"shadowHorizontalLength":3,"closeButtonRollOverBorderColor":"#000000","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingRight":5,"layout":"vertical","closeButtonPaddingTop":0,"closeButtonRollOverIconColor":"#FFFFFF","bodyBackgroundColorDirection":"vertical","titlePaddingLeft":5,"bodyPaddingTop":0,"headerBackgroundColorRatios":[0,0.1,1],"minHeight":20,"minWidth":20,"bodyPaddingLeft":0,"closeButtonBackgroundColor":[],"class":"Window","headerBackgroundColorDirection":"vertical","veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"scrollBarWidth":10,"closeButtonIconWidth":20,"footerBackgroundOpacity":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"headerPaddingTop":10,"closeButtonBorderSize":0},{"buttonToggleHotspots":"this.IconButton_3B7DCC18_34B1_566B_41A0_9C1E0C82F96C_mobile","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","displayPlaybackBar":true,"buttonToggleGyroscope":"this.IconButton_3B7C2C18_34B1_566B_41A6_DFD4EE0A72B5_mobile","zoomEnabled":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_3B7C3C18_34B1_566B_419B_AC90942C2427_mobile","arrowKeysAction":"translate","id":"MainViewer_mobilePanoramaPlayer","viewerArea":"this.MainViewer_mobile","gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation"},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"width":29,"paddingLeft":0,"id":"IconButton_3B7C2C18_34B1_566B_41A6_DFD4EE0A72B5_mobile","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","transparencyActive":true,"borderSize":0,"pressedIconURL":"skin/IconButton_3B7C2C18_34B1_566B_41A6_DFD4EE0A72B5_pressed.png","height":29,"maxWidth":29,"mode":"toggle","minHeight":1,"maxHeight":29,"pressedRollOverIconURL":"skin/IconButton_3B7C2C18_34B1_566B_41A6_DFD4EE0A72B5_pressed_rollover.png","minWidth":1,"class":"IconButton","shadow":false,"iconURL":"skin/IconButton_3B7C2C18_34B1_566B_41A6_DFD4EE0A72B5.png","data":{"name":"IconButton GYRO"},"paddingTop":0,"cursor":"hand"},{"progressBorderRadius":0,"subtitlesOpacity":1,"toolTipFontStyle":"normal","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBackgroundColor":"#000000","playbackBarHeight":10,"id":"MainViewer_mobile","subtitlesHorizontalAlign":"center","vrPointerSelectionColor":"#FF6600","width":"100%","subtitlesVerticalAlign":"bottom","progressHeight":10,"subtitlesGap":0,"playbackBarBorderSize":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","displayTooltipInTouchScreens":true,"progressBorderSize":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesShadow":false,"progressBarBorderRadius":0,"toolTipShadowOpacity":1,"borderSize":0,"playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"toolTipShadowVerticalLength":0,"progressBarBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesBorderSize":0,"surfaceReticleSelectionOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"toolTipBorderSize":0,"height":"100%","progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarHeadHeight":15,"subtitlesTop":0,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","shadow":false,"progressBarBackgroundColorRatios":[0],"toolTipPaddingTop":2,"progressBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"toolTipShadowColor":"#333333","paddingTop":0,"playbackBarProgressBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","paddingBottom":0,"toolTipBorderColor":"#767676","toolTipPaddingBottom":2,"subtitlesPaddingLeft":5,"playbackBarHeadOpacity":1,"propagateClick":false,"doubleClickAction":"toggle_fullscreen","subtitlesPaddingRight":5,"toolTipTextShadowBlurRadius":1,"subtitlesBottom":50,"subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"paddingLeft":0,"toolTipShadowBlurRadius":1,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingBottom":5,"paddingRight":0,"borderRadius":0,"progressBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","toolTipPaddingRight":3,"firstTransitionDuration":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowHorizontalLength":0,"transitionDuration":500,"playbackBarOpacity":1,"displayTooltipInSurfaceSelection":true,"toolTipOpacity":1,"playbackBarBackgroundOpacity":1,"progressBackgroundColor":["#FFFFFF"],"progressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"toolTipTextShadowOpacity":0,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressLeft":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"transitionMode":"blending","subtitlesTextDecoration":"none","progressBarOpacity":1,"minHeight":25,"playbackBarProgressBorderColor":"#000000","playbackBarBottom":5,"toolTipPaddingLeft":3,"minWidth":50,"surfaceReticleColor":"#FFFFFF","class":"ViewerArea","toolTipBorderRadius":1,"subtitlesFontFamily":"Arial","toolTipFontColor":"#606060","subtitlesPaddingTop":5,"progressBottom":0,"progressRight":0,"surfaceReticleOpacity":0.6,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadBorderRadius":0,"toolTipShadowSpread":0,"toolTipFontWeight":"normal","playbackBarProgressOpacity":1,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"progressOpacity":1},{"propagateClick":false,"paddingBottom":0,"backgroundOpacity":0,"left":"0%","width":"9.903%","paddingLeft":0,"id":"Image_2474DB3F_34B3_D2A5_41C7_3089919C1D56_mobile","verticalAlign":"middle","url":"skin/Image_2474DB3F_34B3_D2A5_41C7_3089919C1D56.gif","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"bottom":"0%","height":"4.531%","click":"this.WebFrame_258EFC2D_34B1_56A5_41C7_159DCD70A307.set('url', this.translate('PopupWebFrameBehaviour_2505E721_34B3_525D_4190_1230D4D3B060.url')); this.showWindow(this.window_2505B722_34B3_525F_41B8_2B651540A8CB, null, false)","minHeight":1,"minWidth":1,"class":"Image","shadow":false,"data":{"name":"Image11017"},"paddingTop":0,"scaleMode":"fit_inside"},{"class":"VideoPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobileVideoPlayer","displayPlayOverlay":true,"clickAction":"play_pause"},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"scrollBarWidth":5,"width":57.52,"paddingLeft":0,"id":"Container_3B7D8C19_34B1_566D_41C5_9416339069DF_mobile","gap":5,"verticalAlign":"top","right":"0%","scrollBarOpacity":0.5,"paddingRight":0,"borderRadius":0,"children":["this.Container_3B7CCC17_34B1_5665_41C5_38BC59221192_mobile","this.Container_3B7C0C18_34B1_566B_41C7_8D80E7318E12_mobile"],"toolTipHorizontalAlign":"center","horizontalAlign":"left","borderSize":0,"top":"0.05%","contentOpaque":false,"height":320.5,"layout":"absolute","scrollBarMargin":1,"overflow":"scroll","minHeight":1,"minWidth":1,"class":"Container","shadow":false,"data":{"name":"--SETTINGS"},"paddingTop":0,"scrollBarVisible":"rollOver","scrollBarColor":"#000000"},{"height":1080,"id":"video_3BFBFE3E_34CF_52A7_41C4_756477927835","label":trans('video_3BFBFE3E_34CF_52A7_41C4_756477927835.label'),"loop":false,"thumbnailUrl":"media/video_3BFBFE3E_34CF_52A7_41C4_756477927835_t.jpg","width":1920,"autoplay":true,"class":"Video","scaleMode":"fit_inside","data":{"label":"Arireda Ig1-1"},"video":{"width":1144,"levels":[{"width":1920,"posterURL":"media/video_3BFBFE3E_34CF_52A7_41C4_756477927835_poster.jpg","class":"VideoResourceLevel","bitrate":3888,"type":"video/mp4","url":"media/video_3BFBFE3E_34CF_52A7_41C4_756477927835.mp4","framerate":25,"height":1080}],"class":"VideoResource","height":644}},{"propagateClick":true,"paddingBottom":0,"backgroundOpacity":0,"width":29,"paddingLeft":0,"id":"IconButton_3B7DFC18_34B1_566B_41BC_9054ACFB5009_mobile","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","transparencyActive":true,"borderSize":0,"pressedIconURL":"skin/IconButton_3B7DFC18_34B1_566B_41BC_9054ACFB5009_pressed.png","height":29,"maxWidth":29,"mode":"toggle","minHeight":1,"maxHeight":29,"pressedRollOverIconURL":"skin/IconButton_3B7DFC18_34B1_566B_41BC_9054ACFB5009_pressed_rollover.png","minWidth":1,"class":"IconButton","shadow":false,"iconURL":"skin/IconButton_3B7DFC18_34B1_566B_41BC_9054ACFB5009.png","data":{"name":"IconButton FULLSCREEN"},"paddingTop":0,"cursor":"hand"},{"vfov":180,"hfovMax":130,"label":trans('panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6.label'),"id":"panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6","pitch":0,"thumbnailUrl":"media/panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_t.jpg","hfov":360,"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_382DB970_34F3_DEBB_41AF_55E2036F69F2","this.popup_39FDF0C4_34F1_AFDB_41C5_88ED284366F0","this.overlay_3A35C67C_34F7_D2AB_41C3_E8E8E016FFD3","this.overlay_3AB738F5_34CF_FFA5_41B8_01A970AD1533"],"frames":[{"cube":{"levels":[{"url":"media/panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"tags":"ondemand","height":1024},{"url":"media/panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":6144,"rowCount":1,"tags":"mobilevr","height":1024}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_t.jpg"}],"data":{"label":"p1"},"partial":false},{"items":[{"media":"this.video_3BFBFE3E_34CF_52A7_41C4_756477927835","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","player":"this.MainViewer_mobileVideoPlayer","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_258B4BEB_34B1_51AD_41A8_0B92D364251F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_258B4BEB_34B1_51AD_41A8_0B92D364251F, 0)"}],"id":"playList_258B4BEB_34B1_51AD_41A8_0B92D364251F","class":"PlayList"},{"showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"},"propagateClick":false,"paddingBottom":0,"backgroundOpacity":0.55,"left":0,"paddingLeft":0,"id":"veilPopupPanorama","right":0,"paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","borderSize":0,"top":0,"backgroundColorRatios":[0],"bottom":0,"backgroundColor":["#000000"],"minHeight":0,"backgroundColorDirection":"vertical","minWidth":0,"shadow":false,"class":"UIComponent","data":{"name":"UIComponent12518"},"paddingTop":0,"visible":false},{"propagateClick":false,"paddingBottom":0,"backgroundOpacity":1,"left":0,"paddingLeft":0,"id":"zoomImagePopupPanorama","right":0,"paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","borderSize":0,"top":0,"backgroundColorRatios":[],"bottom":0,"backgroundColor":[],"minHeight":0,"backgroundColorDirection":"vertical","minWidth":0,"shadow":false,"class":"ZoomImage","scaleMode":"custom","data":{"name":"ZoomImage12519"},"paddingTop":0,"visible":false},{"showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"},"shadowSpread":1,"propagateClick":false,"paddingBottom":5,"backgroundOpacity":0.3,"gap":5,"paddingLeft":5,"id":"closeButtonPopupPanorama","fontFamily":"Arial","verticalAlign":"middle","right":10,"shadowBlurRadius":6,"paddingRight":5,"borderRadius":0,"shadowColor":"#000000","toolTipHorizontalAlign":"center","fontColor":"#FFFFFF","horizontalAlign":"center","borderSize":0,"iconWidth":"100%","top":10,"backgroundColorRatios":[0,0.1,1],"textDecoration":"none","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"borderColor":"#000000","layout":"horizontal","fontSize":"1.29vmin","mode":"push","minHeight":0,"backgroundColorDirection":"vertical","minWidth":0,"fontStyle":"normal","shadow":false,"iconColor":"#000000","class":"CloseButton","iconLineWidth":5,"pressedIconColor":"#888888","data":{"name":"CloseButton12520"},"iconHeight":"100%","paddingTop":5,"visible":false,"cursor":"hand","rollOverIconColor":"#666666","fontWeight":"normal"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_3E4E3513_344F_767D_41BF_805D797102E0","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"propagateClick":false,"paddingBottom":0,"backgroundOpacity":1,"insetBorder":false,"width":"100%","paddingLeft":0,"id":"WebFrame_258EFC2D_34B1_56A5_41C7_159DCD70A307","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","borderSize":0,"backgroundColorRatios":[],"backgroundColor":[],"height":"100%","scrollEnabled":true,"minHeight":0,"backgroundColorDirection":"vertical","minWidth":0,"shadow":false,"class":"WebFrame","data":{"name":"WebFrame12516"},"paddingTop":0},{"propagateClick":false,"paddingBottom":0,"backgroundOpacity":1,"insetBorder":false,"width":"100%","paddingLeft":0,"id":"WebFrame_258E3C2E_34B1_56A7_41BE_E545EC17EAFA","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","borderSize":0,"backgroundColorRatios":[],"backgroundColor":[],"height":"100%","scrollEnabled":true,"minHeight":0,"backgroundColorDirection":"vertical","minWidth":0,"shadow":false,"class":"WebFrame","data":{"name":"WebFrame12517"},"paddingTop":0},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_387219A5_34F3_D1A5_41A1_3E0BE0E85D09"],"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Polygon"},"roll":0,"distance":50,"image":{"levels":[{"url":"media/panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_HS_h3z3wu6q.png","width":160,"class":"ImageResourceLevel","height":105}],"class":"ImageResource"},"pitch":10.73,"hfov":28.31,"yaw":-45.39}],"id":"overlay_382DB970_34F3_DEBB_41AF_55E2036F69F2","data":{"label":"Polygon"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_3A39068A_34F7_D26F_41C4_B4969F3C7F0A"],"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Polygon"},"roll":0,"distance":50,"image":{"levels":[{"url":"media/panorama_39A0CD4B_34B3_D6ED_41C9_08BB511E1DB6_HS_1gf77kjs.png","width":47,"class":"ImageResourceLevel","height":170}],"class":"ImageResource"},"pitch":3.6,"hfov":8.56,"yaw":23.31}],"id":"overlay_3A35C67C_34F7_D2AB_41C3_E8E8E016FFD3","data":{"label":"Polygon"},"maps":[]},{"roll":-3.04,"enabledInCardboard":true,"id":"overlay_3AB738F5_34CF_FFA5_41B8_01A970AD1533","videoVisibleOnStop":false,"video":{"width":1144,"levels":[{"width":1920,"posterURL":"media/video_3BFBFE3E_34CF_52A7_41C4_756477927835_poster.jpg","class":"VideoResourceLevel","bitrate":3888,"type":"video/mp4","url":"media/video_3BFBFE3E_34CF_52A7_41C4_756477927835.mp4","framerate":25,"height":1080}],"class":"VideoResource","height":644},"loop":true,"image":"this.res_3A9FD6AA_34D0_F3AF_41BA_EB06290DAC1A","pitch":-11.36,"useHandCursor":true,"hfov":17.79,"yaw":108.85,"rotationY":-16.15,"autoplay":true,"class":"VideoPanoramaOverlay","cues":[],"blending":0,"rotationX":12.99,"click":"if(this.overlay_3AB738F5_34CF_FFA5_41B8_01A970AD1533.get('state') != 'playing'){ this.overlay_3AB738F5_34CF_FFA5_41B8_01A970AD1533.play(); } else { this.overlay_3AB738F5_34CF_FFA5_41B8_01A970AD1533.pause(); }","distance":50,"vfov":10.69,"data":{"label":"Video"}},{"click":"this.showPopupPanoramaOverlay(this.popup_39FDF0C4_34F1_AFDB_41C5_88ED284366F0, {'pressedBorderSize':0,'iconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'backgroundOpacity':0.3,'backgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'borderRadius':0,'rollOverIconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','borderColor':'#000000','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','pressedIconLineWidth':5}, this.res_397AA2F6_34F1_53A7_41A9_7B35B0D62C43, null, null, null, false)","id":"HotspotPanoramaOverlayArea_387219A5_34F3_D1A5_41A1_3E0BE0E85D09","mapColor":"image","class":"HotspotPanoramaOverlayArea"},{"click":"this.WebFrame_258E3C2E_34B1_56A7_41BE_E545EC17EAFA.set('url', this.translate('PopupWebFrameBehaviour_3A4CC683_34F0_B25C_41B6_08A3D51B938F.url')); this.showWindow(this.window_24816F99_34F1_526D_41C1_8A315664EE46, null, false)","id":"HotspotPanoramaOverlayArea_3A39068A_34F7_D26F_41C4_B4969F3C7F0A","mapColor":"image","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_3A9FD6AA_34D0_F3AF_41BA_EB06290DAC1A_0.jpg","width":1920,"class":"ImageResourceLevel","height":1080}],"id":"res_3A9FD6AA_34D0_F3AF_41BA_EB06290DAC1A","class":"ImageResource"}],"backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"desktopMipmappingEnabled":false,"defaultVRPointer":"laser","height":"100%","layout":"absolute","backgroundColor":["#FFFFFF"],"children":["this.MainViewer_mobile","this.Image_3B719CD8_34B0_D7EB_41B3_AE7DAE004781_mobile","this.Container_3B7D8C19_34B1_566D_41C5_9416339069DF_mobile","this.Image_2474DB3F_34B3_D2A5_41C7_3089919C1D56_mobile","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"scrollBarMargin":2,"minHeight":20,"backgroundColorDirection":"vertical","minWidth":20,"vrPolyfillScale":0.75,"overflow":"hidden","shadow":false,"class":"Player","buttonToggleFullscreen":"this.IconButton_3B7DFC18_34B1_566B_41BC_9054ACFB5009_mobile","data":{"name":"Player615","defaultLocale":"en","textToSpeechConfig":{"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"rate":1,"speechOnQuizQuestion":false,"volume":1},"locales":{"en":"locale/en.txt"}},"scrollBarVisible":"rollOver","downloadEnabled":false,"paddingTop":0,"mediaActivationMode":"window"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.5.js.map
//Generated with v2020.5.5, Mon Mar 15 2021