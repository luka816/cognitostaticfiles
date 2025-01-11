tinymce.init({
    selector: '#id_content',
    plugins: 'image',
    toolbar: 'undo redo | styleselect | bold italic | image | alignleft aligncenter alignright',
    // images_upload_url: '/image_upload/',
    automatic_uploads: true,
    file_picker_types: 'image',
    license_key: 'gpl',
    setup: function (editor) {
        editor.on('init', function () {
            const textarea = document.getElementById('id_content');
            textarea.removeAttribute('required');
        });
    },
    /* images_upload_handler: function (blobInfo, success, failure) {
        let formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        fetch('/image_upload/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': csrfToken,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => {
                if (result.location) {
                    success(result.location);
                } else {
                    failure('No image URL returned');
                }
            })
            .catch(error => {
                console.error('Image upload failed:', error);
                failure('Upload failed');
            });
    } */
});