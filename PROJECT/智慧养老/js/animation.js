pageOne()
function pageOne(){
    $(".page1").fadeIn(500,function(){
        $(".page1-bg").fadeIn(500);
        $(".page1-car1").fadeIn(500).addClass("sportX2");
        $(".page1-car2").fadeIn(500).addClass("sportX1");
        $(".page1-yun1").fadeIn(500).addClass("sportX1");
        $(".page1-yun4").fadeIn(500).addClass("sportX2");
        $(".page1-yun5").fadeIn(500,function(){
            $(".page1-logo").fadeIn(500,function(){
                $(".page1-yun2").fadeIn(1500);
                $(".page1-yun3").fadeIn(1500,function(){
                    $(".page1-people").fadeIn(500,function(){
                        setTimeout(function(){
                            $(".page1").fadeOut(500,pageTwo);
                        },2200);
                    });
                });
            })
        });
    });
}

// pageTwo()
function pageTwo(){
    $(".page2").fadeIn(500,function(){
        $(".page2-bg").fadeIn(300);
        $(".page2-floor").fadeIn(500);
        $(".page2-ring").fadeIn(500,function(){
            $(".page2-1").fadeIn(1000,function(){
                $(".page2-2").fadeIn(1000,function(){
                    $(".page2-3").fadeIn(1000,function(){
                        $(".page2-4").fadeIn(1000,function(){
                            $(".page2-7").fadeIn(1000,function(){
                                $(".page2-6").fadeIn(1000,function(){
                                    $(".page2-5").fadeIn(1000,function(){
                                        $(".page2-8").fadeIn(1000,function(){
                                            $(".page2-9").fadeIn(1000,function(){
                                                $(".page2-ring").addClass("blink2");
                                                $(".page2-10").fadeIn(1000,function(){
                                                    $(".page2-11").fadeIn(1000,function(){
                                                        $(".page2-12").fadeIn(1000,function(){
                                                            $(".page2-15").fadeIn(1000,function(){
                                                                $(".page2-14").fadeIn(1000,function(){
                                                                    $(".page2-13").fadeIn(1000,function(){
                                                                        $(".page2-16").fadeIn(1000,function(){
                                                                            $(".page2-17").fadeIn(1000,function(){
                                                                                $(".page2-18").fadeIn(1000,function(){
                                                                                    $(".page2-19").fadeIn(1000,function(){
                                                                                        $(".page2-20").fadeIn(1000,function(){
                                                                                            setTimeout(function(){
                                                                                                $(".page2").fadeOut(500,pageThree);
                                                                                            },2000);
                                                                                        });
                                                                                    });
                                                                                }).addClass("blink2");
                                                                            });
                                                                        });
                                                                    });
                                                                }).addClass("blink2");
                                                            });
                                                        });
                                                    });
                                                }).addClass("blink2");
                                            });
                                        });
                                    });
                                }).addClass("blink2");
                            });
                        });
                    }).addClass("blink2");
                }).addClass("blink2");
            }).addClass("blink2");
        });
    });
}
// pageThree()
function pageThree(){
    $(".page3").fadeIn(500,function(){
        $(".page3-floor").fadeIn(550);
        $(".page3-bg").fadeIn(500,function(){
            $(".page3-1").fadeIn(500,function(){
                $(".page3-2").fadeIn(500,function(){
                    $(".page3-cover1").fadeIn(10,function(){
                        $(".page3-3").fadeIn(500);
                    })
                    $(".page3-cover2").fadeIn(10,function(){
                        $(".page3-4").fadeIn(200);
                    }).addClass("coverX");
                    setTimeout(function(){
                        $(".page3-cover1").addClass("coverX");
                    },1000);
                    setTimeout(function(){
                        $(".page3-5").fadeIn(500,function(){
                            $(".page3-6").fadeIn(500,function(){
                                $(".page3-7").fadeIn(500,function(){
                                    setTimeout(function(){
                                        $(".page3").fadeOut(700,pageFour);
                                    },3000);
                                });
                            });
                        });
                    },2500);
                }).addClass("blink2");
            });
        });
    });
}
// pageFour()
function pageFour(){
    $(".page4").fadeIn(500,function(){
        $(".page4-bg").fadeIn(200);
        $(".page4-floor").fadeIn(500,function(){
            $(".page4-1").fadeIn(500,function(){
                $(".page4-2").fadeIn(500,function(){
                    $(".page4-3").fadeIn(500,function(){
                        $(".page4-4").fadeIn(500,function(){
                            $(".page4-5").fadeIn(500,function(){
                                $(".page4-6").fadeIn(500,function(){
                                    $(".page4-7").fadeIn(500,function(){
                                        $(".page4-8").fadeIn(500,function(){
                                            $(".page4-9").fadeIn(500,function(){
                                                $(".page4-10").fadeIn(500,function(){
                                                    $(".page4-11").fadeIn(500,function(){
                                                        $(".page4-12").fadeIn(500,function(){
                                                            $(".page4-13").fadeIn(500,function(){
                                                                $(".page4-14").fadeIn(500,function(){
                                                                    $(".page4-15").fadeIn(500,function(){
                                                                        $(".page4-16").fadeIn(500,function(){
                                                                            $(".page4-17").fadeIn(500,function(){
                                                                                setTimeout(function(){
                                                                                    $(".page4").fadeOut(500,pageFive);
                                                                                },3000);
                                                                            });
                                                                        }).addClass("blink2");
                                                                    });
                                                                });
                                                            });
                                                        }).addClass("blink2");
                                                    });
                                                });
                                            }).addClass("blink2");
                                        });
                                    });
                                });
                            }).addClass("blink2");
                        });
                    }).addClass("blink2");
                });
            });
        });
    });
}
// pageFive()
function pageFive(){
    $(".page5").fadeIn(500,function(){
        $(".page5-floor").fadeIn(550);
        $(".page5-bg").fadeIn(500,function(){
            $(".page5-1").fadeIn(500,function(){
                $(".page5-2").fadeIn(500,function(){
                    $(".page5-3").fadeIn(500,function(){
                        $(".page5-4").fadeIn(500,function(){
                            $(".page5-5").fadeIn(500,function(){
                                setTimeout(function(){
                                    $(".page5").fadeOut(500,pageSix);
                                },3000);
                            });
                        });
                    });
                }).addClass("blink2");
            });
        });
    });
}
// pageSix()
function pageSix(){
    var timer = null;
    $(".page6").fadeIn(500,function(){
        $(".page6-floor").fadeIn(500);
        $(".page6-bg1").fadeIn(200);
        $(".page6-bg2").fadeIn(200);
        $(".page6-bg3").fadeIn(500).addClass("blink2");
        $(".page6-arm1").fadeIn(200);
        $(".page6-1").fadeIn(500,function(){
            var i = 0;
            function armRun(){
                $(".page6-arm1").fadeIn(200,function(){
                    timer = setInterval(function(){
                        i++;
                        $(".page6-arm1").attr("src","images/page6/page6-arm"+i+".png");
                        if(i >= 3){
                            i = 0;
                        }
                    },700);
                });
            }
            armRun();
            $(".page6-2").fadeIn(500,function(){
                $(".page6-3").fadeIn(500,function(){
                    $(".page6-4").fadeIn(500,function(){
                        $(".page6-5").fadeIn(500,function(){
                            $(".page6-6").fadeIn(500,function(){
                                $(".page6-7").fadeIn(500,function(){
                                    $(".page6-8").fadeIn(500,function(){
                                        $(".page6-9").fadeIn(500,function(){
                                            $(".page6-10").fadeIn(500,function(){
                                                $(".page6-11").fadeIn(500,function(){
                                                    $(".page6-12").fadeIn(500,function(){
                                                        $(".page6-13").fadeIn(500,function(){
                                                            $(".page6-14").fadeIn(500,function(){
                                                                $(".page6-15").fadeIn(500,function(){
                                                                    $(".page6-16").fadeIn(500,function(){
                                                                        $(".page6-17").fadeIn(500,function(){
                                                                            $(".page6-18").fadeIn(500,function(){
                                                                                $(".page6-19").fadeIn(500,function(){
                                                                                    $(".page6-20").fadeIn(500,function(){
                                                                                        $(".page6-21").fadeIn(500,function(){
                                                                                            $(".page6-22").fadeIn(500,function(){
                                                                                                $(".page6-23").fadeIn(500,function(){
                                                                                                    setTimeout(function(){
                                                                                                       $(".page6").fadeOut(500,pageSeven);
                                                                                                        clearInterval(timer);
                                                                                                    },3000);
                                                                                                });
                                                                                            }).addClass("blink2");
                                                                                        });
                                                                                    });
                                                                                }).addClass("blink2");
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        }).addClass("blink2");
                                                    });
                                                });
                                            });
                                        });
                                    }).addClass("blink2");
                                });
                            });
                        });
                    });
                }).addClass("blink2");
            });
        });
    });
}
// pageSeven();
function pageSeven(){
    $(".page7").fadeIn(500,function(){
        $(".page7-floor").fadeIn(550);
        $(".page7-bg").fadeIn(500,function(){
            $(".page7-1").fadeIn(500,function(){
                $(".page7-2").fadeIn(500,function(){
                    $(".page7-cover1").fadeIn(10,function(){
                        $(".page7-3").fadeIn(500);
                    })
                    $(".page7-cover2").fadeIn(10,function(){
                        $(".page7-4").fadeIn(200);
                    }).addClass("coverX");
                    setTimeout(function(){
                        $(".page7-cover1").addClass("coverX");
                    },1000);
                    setTimeout(function(){
                        $(".page7-5").fadeIn(500,function(){
                            $(".page7-6").fadeIn(500,function(){
                                $(".page7-7").fadeIn(500,function(){
                                    $(".page7-8").fadeIn(2000,function(){
                                        $(".page7-9").fadeIn(500,function(){
                                            setTimeout(function(){
                                                $(".page7").fadeOut(500,pageEight);
                                            },3000);
                                        });
                                    });
                                });
                            });
                        });
                    },2500);
                }).addClass("blink2");
            });
        });
    });
}
// pageEight()
function pageEight(){
    var timer = null;
    $(".page8").fadeIn(500,function(){
        $(".page8-floor").fadeIn(100);
        $(".page8-bg1").fadeIn(500);
        $(".page8-bg2").fadeIn(500);
        $(".page8-arm1").fadeIn(500,function(){
            var i = 0;
            function armRun(){
                $(".page8-arm1").fadeIn(200,function(){
                    timer = setInterval(function(){
                        i++;
                        $(".page8-arm1").attr("src","images/page6/page8-arm"+i+".png");
                        if(i >= 3){
                            i = 0;
                        }
                    },700);
                });
            }
            armRun();
        });
        $(".page8-1").fadeIn(500,function(){
            $(".page8-2").fadeIn(500,function(){
                $(".page8-3").fadeIn(500,function(){
                    $(".page8-4").fadeIn(500,function(){
                        $(".page8-5").fadeIn(500,function(){
                            $(".page8-6").fadeIn(500,function(){
                                $(".page8-7").fadeIn(500,function(){
                                    $(".page8-8").fadeIn(500,function(){
                                        $(".page8-9").fadeIn(500,function(){
                                            $(".page8-10").fadeIn(500,function(){
                                                $(".page8-11").fadeIn(500,function(){
                                                    $(".page8-12").fadeIn(500,function(){
                                                        $(".page8-13").fadeIn(500,function(){
                                                            $(".page8-14").fadeIn(500,function(){
                                                                $(".page8-15").fadeIn(500,function(){
                                                                    $(".page8-16").fadeIn(500,function(){
                                                                        $(".page8-17").fadeIn(500,function(){
                                                                            $(".page8-18").fadeIn(500,function(){
                                                                                setTimeout(function(){
                                                                                    $(".page8").fadeOut(500,pageNine);
                                                                                    clearInterval(timer);
                                                                                },3000);
                                                                            });
                                                                        }).addClass("blink2");
                                                                    });
                                                                });
                                                            }).addClass("blink2");
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }).addClass("blink2");
                                });
                            });
                        });
                    });
                });
            }).addClass("blink2");
        });
    });
}
// pageNine()
function pageNine(){
    $(".page9").fadeIn(500,function(){
        $(".page9-floor").fadeIn(550);
        $(".page9-bg").fadeIn(500,function(){
            $(".page9-1").fadeIn(500,function(){
                $(".page9-2").fadeIn(500,function(){
                    $(".page9-3").fadeIn(500,function(){
                        $(".page9-4").fadeIn(500,function(){
                            $(".page9-5").fadeIn(500,function(){
                                setTimeout(function(){
                                    $(".page9").fadeOut(500,pageTen);
                                },3000);
                            });
                        });
                    });
                }).addClass("blink2");
            });
        });
    });
}
// pageTen()
function pageTen(){
    $(".page10").fadeIn(500,function(){
        $(".page10-floor").fadeIn(100);
        $(".page10-bg1").fadeIn(500);
        $(".page10-bg2").fadeIn(500);
        $(".page10-bg3").fadeIn(700).addClass("blink2");
        $(".page10-bg4").fadeIn(500);
        $(".page10-arm1").fadeIn(500);
        $(".page10-1").fadeIn(500,function(){
            var i = 0;
            function armRun(){
                $(".page10-arm1").fadeIn(200,function(){
                    timer = setInterval(function(){
                        i++;
                        $(".page10-arm1").attr("src","images/page6/page10-arm"+i+".png");
                        if(i >= 2){
                            i = 0;
                        }
                    },500);
                });
            }
            armRun();
            $(".page10-2").fadeIn(500,function(){
                setTimeout(function(){
                    $(".page10").fadeOut(500,pageEleven);
                },2000);
            });
        });
    });
}
// pageEleven()
function pageEleven(){
    $(".page11").fadeIn(500,function(){
        $(".page11-floor").fadeIn(550);
        $(".page11-bg").fadeIn(500,function(){
            $(".page11-1").fadeIn(500,function(){
                $(".page11-2").fadeIn(500,function(){
                    $(".page11-cover1").fadeIn(10,function(){
                        $(".page11-3").fadeIn(500);
                    })
                    $(".page11-cover2").fadeIn(10,function(){
                        $(".page11-4").fadeIn(200);
                    }).addClass("coverX");
                    setTimeout(function(){
                        $(".page11-cover1").addClass("coverX");
                    },1000);
                    setTimeout(function(){
                        $(".page11-5").fadeIn(500,function(){
                            $(".page11-6").fadeIn(500,function(){
                                $(".page11-7").fadeIn(500,function(){
                                    $(".page11-8").fadeIn(2000,function(){
                                        $(".page11-9").fadeIn(500,function(){
                                            setTimeout(function(){
                                                $(".page11").fadeOut(500,pageTwelve);
                                            },3000);
                                        });
                                    });
                                });
                            });
                        });
                    },2500);
                }).addClass("blink2");
            });
        });
    });
}
// pageTwelve()
function pageTwelve(){
    $(".page12").fadeIn(500,function(){
        $(".page12-floor").fadeIn(550);
        $(".page12-bg").fadeIn(500,function(){
            $(".page12-1").fadeIn(500,function(){
                $(".page12-2").fadeIn(500,function(){
                    $(".page12-2").fadeOut(300);
                    $(".page12-3").fadeIn(500,function(){
                    	$(".page12-3").fadeOut(300);
                        $(".page12-4").fadeIn(500,function(){
                            $(".page12-5").fadeIn(500,function(){
                                setTimeout(function(){
                                    $(".page12").fadeOut(500,pageThirteen);
                                },3000);
                            });
                        }).addClass("blink2");
                    });
                });
            });
        });
    });
}
// pageThirteen()
function pageThirteen(){
    $(".page13").fadeIn(500,function(){
        $(".page13-floor").fadeIn(550);
        $(".page13-bg").fadeIn(500,function(){
            $(".page13-1").fadeIn(500,function(){
                $(".page13-2").fadeIn(500,function(){
                    $(".page13-3").fadeIn(500,function(){
                        $(".page13-4").fadeIn(500,function(){
                            $(".page13-5").fadeIn(500,function(){
                                setTimeout(function(){
                                    $(".page13").fadeOut(500,pageFourteen);
                                },3000);
                            });
                        });
                    });
                }).addClass("blink2");
            });
        });
    });
}
// pageFourteen()
function pageFourteen(){
    $(".page14").fadeIn(500,function(){
        $(".page14-1").fadeIn(500,function(){
            $(".page14-2").fadeIn(500,function(){
                $(".page14-3").fadeIn(500,function(){
                    $(".page14-6").fadeIn(500,function(){
                        $(".page14-5").fadeIn(100).addClass("coverX2");
                        $(".page14-4").fadeIn(400);
                        $(".page14-7").fadeIn(500,function(){
                            $(".page14-8").fadeIn(500,function(){
                                $(".page14-9").fadeIn(500,function(){
                                    $(".page14-10").fadeIn(500,function(){
                                        $(".page14-11").fadeIn(500,function(){
                                            $(".page14-12").fadeIn(500,function(){
                                                $(".page14-13").fadeIn(500,function(){
                                                    $(".page14-14").fadeIn(500,function(){
                                                        $(".page14-15").fadeIn(500,function(){
                                                            setTimeout(function(){
                                                                $(".page14").fadeOut(500,function(){
                                                                    history.go(0);
                                                                    pageOne();
                                                                });
                                                            },10000);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}