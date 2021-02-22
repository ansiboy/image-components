let element = document.createElement('style');
element.setAttribute("type", "text/css");
element.setAttribute("data-name", "jueying");
element.innerHTML = `
    .image-manager {
        z-index: 800;
    }
    .image-manager .modal-body .col-xs-2 {
        margin-top   : 6px;
        margin-bottom: 6px;
    }
    .modal-footer .pagination {
        margin: 0;
    }
    .modal-header h4 {
        margin: 0;
    }

    .image-upload .item {
        border: 1px solid rgb(204, 204, 204);      
        text-align: center;
    }

    .image-upload input[type="file"] {
        opacity: 0;
    }

    .image-thumber .item {
        
    }
`;
