---
layout: page
title: Gaussian splatting for 3D reconstruction
description: 
img: assets/img/tours.gif
importance: 1
category: 
related_publications: false
---

## Summary
Metric documentation of cultural heritage provides reference points for preservation and in some cases, reconstruction of built heritage. Although the documentation process is traditionally done using 2D maps, drawings, and photographs, modern techniques nowadays tend to use 3D digital technologies such as laser scanning and photogrammetry. Novel neural radiance fields-based methods show great promise in supporting this task, first with the Neural Radiance Fields (NeRF) and later on using the more explicit 3D Gaussian splatting (3DGS) methods which is the subject of this research. While previous other studies have proven this point, it still remains to be seen if radiance fields methods such as 3DGS can provide a similar quality, both visual and geometric, to conventional methods. This is particularly important for heritage documentation applications. This project aims, therefore, to investigate the application of 3DGS for heritage documentation in terms of metric quality.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian3D_1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gaussian3D_2.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Collaborators
- Hélène Macher (ICube TRIO)
- Etienne Sommer (ICube TRIO)
- Kadek Ananta Satriadi (Monash University)

## Related publications
<div class="publications">
  {% bibliography --file papers --max 3 %}
</div>

{% bibliography --query @*[id=wilson20253d|sommer2025radiance] %}

{% reference wilson20253d %}

{% reference sommer2025radiance %}

{% reference isprs-archives-XLVIII-M-9-2025-1059-2025 %}

{% reference isprs-archives-XLVIII-M-9-2025-1475-2025 %}
