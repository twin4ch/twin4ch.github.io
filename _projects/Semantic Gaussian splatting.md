---
layout: page
title: Semantic Gaussian splatting
description: 
img: assets/img/murtiyoso2025javanese.gif
importance: 1
category: 
related_publications: false
---

## Summary
Recent advancement of radiance field methods such as 3D Gaussian Splatting (3DGS) have achieved a breakthrough in 3D reconstruction. Several derivatives have extended 3DGS with segmentation capabilities. Segmentation of 3D data accelerates surveying workflows by enabling efficient modelling and prediction using spatial data. For an urban heritage complexsite, 3D segmentation would facilitate better scene understanding and provide informed decision-making by the end-users. Therefore, the use of these 3DGS segmentation methods shows promise for these applications. However, the use of real-world data remains underexplored, as it poses some challenges to the segmentation process. This study develops and evaluates 3DGS segmentation methods for heritage sites reconstruction and segmentation. The heterogeneous nature of heritage architectures serve as a challenging test case for the currently available solutions, due to their complex geometric and decorative features. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/semanticGauss_1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Lead
Widiatmoko Azis Fadilah

## Collaborators
- Thodoris Betsas (NTUA)
- Virgile Gauthier (ICube TRIO)

## Related publications
<div class="publications">
  {% bibliography --group_by none --query @*[project=semG]* %}
</div>

