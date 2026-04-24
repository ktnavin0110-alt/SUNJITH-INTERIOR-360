var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5343407204367887,
          "pitch": 0.14931937086362268,
          "rotation": 5.497787143782138,
          "target": "1-upperliving"
        },
        {
          "yaw": 1.8327821599587786,
          "pitch": 0.11503684629339972,
          "rotation": 0,
          "target": "3-washunit"
        },
        {
          "yaw": 2.6337933435750402,
          "pitch": 0.08176643127211491,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-upperliving",
      "name": "UPPERLIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0288928597184253,
          "pitch": 0.2149173258601813,
          "rotation": 16.493361431346422,
          "target": "2-dining"
        },
        {
          "yaw": -1.417408217147507,
          "pitch": 0.15698103123320806,
          "rotation": 0,
          "target": "8-ff-bedroom-1"
        },
        {
          "yaw": -0.719237014978118,
          "pitch": 0.14753878142719756,
          "rotation": 0,
          "target": "9-ff-bedroom-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8951247913183416,
          "pitch": 0.05135116413671703,
          "title": "OPEN TERRACE",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3012135716288888,
          "pitch": 0.18571146692657514,
          "rotation": 0,
          "target": "3-washunit"
        },
        {
          "yaw": -0.3959772984572769,
          "pitch": 0.23546335804322993,
          "rotation": 0,
          "target": "4-gf-bedroom1"
        },
        {
          "yaw": -0.9292918879936494,
          "pitch": 0.14781261263884105,
          "rotation": 1.5707963267948966,
          "target": "5-gf-bedroom2"
        },
        {
          "yaw": -2.933075234192014,
          "pitch": 0.27135574364775117,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -1.70111985748499,
          "pitch": -0.21051337335033615,
          "rotation": 7.0685834705770345,
          "target": "1-upperliving"
        },
        {
          "yaw": -2.0565673753900846,
          "pitch": 0.13539446866085747,
          "rotation": 4.71238898038469,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-washunit",
      "name": "WASHUNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2849733416276177,
          "pitch": -0.13352217492694507,
          "rotation": 7.0685834705770345,
          "target": "1-upperliving"
        },
        {
          "yaw": 1.3635861899767008,
          "pitch": 0.1406023825282201,
          "rotation": 0,
          "target": "5-gf-bedroom2"
        },
        {
          "yaw": 1.945862681357534,
          "pitch": 0.06461167614946106,
          "rotation": 4.71238898038469,
          "target": "4-gf-bedroom1"
        },
        {
          "yaw": 2.5105302578094175,
          "pitch": 0.15010166963693194,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -2.814696419579665,
          "pitch": -0.009892637415022776,
          "rotation": 1.5707963267948966,
          "target": "0-living-room"
        },
        {
          "yaw": 2.9659545512960417,
          "pitch": 0.03425645481979345,
          "rotation": 1.5707963267948966,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gf-bedroom1",
      "name": "GF BEDROOM1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5660984877114252,
          "pitch": 0.017729680172109852,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gf-bedroom2",
      "name": "GF BEDROOM2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.897816801889153,
          "pitch": 0.1624905020255376,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.796325359035041,
          "pitch": -0.18616064591833137,
          "rotation": 0,
          "target": "7-workarea"
        },
        {
          "yaw": 1.7222383080756414,
          "pitch": -0.02968207774167375,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-workarea",
      "name": "WORKAREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.727649403882098,
          "pitch": -0.02044734003031401,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ff-bedroom-1",
      "name": "FF BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8720948774182027,
          "pitch": 0.04120514712386125,
          "rotation": 0,
          "target": "1-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ff-bedroom-2",
      "name": "FF BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5290835122085316,
          "pitch": 0.05243088243519445,
          "rotation": 0,
          "target": "1-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-toilet",
      "name": "TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "SUNJITH INTERIOR 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
