function showDetails(projectId) {
    const details = document.getElementById(`details-${projectId}`);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const projectDetails = document.querySelectorAll('.details');
    projectDetails.forEach(detail => {
        detail.style.display = 'none';
    });
});
