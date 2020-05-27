function trans_nv12_to_rgba(data_in, data_out, size_out, width, height, stride0, stride1, offset0, offset1) {
    for (var i = 0; i < size_out; i += 4) {
        var irow = Math.floor((i / 4) / width);
        var icol = (i / 4) % width;

        var Y = data_in[offset0 + irow * stride0 + icol];
        var U = data_in[offset1 + Math.floor(irow / 2) * stride1 + Math.floor(icol / 2) * 2 + 0]
        var V = data_in[offset1 + Math.floor(irow / 2) * stride1 + Math.floor(icol / 2) * 2 + 1]

        var R = Y + (V - 128) * 1.4075;
        var G = Y - (U - 128) * 0.3455 - (V - 128) * 0.7169;
        var B = Y + (U - 128) * 1.779;
        //console.log (R,G,B);
        data_out[i + 0] = R;
        data_out[i + 1] = G;
        data_out[i + 2] = B;
        data_out[i + 3] = 255;
    }

    console.log(data_in, data_out)
}

//out is rgba format
//in is i420 format
function map_i420_to_rgba(out_data, out_width, out_height,
    in_data, in_stride0, in_stride1, in_stride2, in_offset0, in_offset1, in_offset2) {

    var out_size = out_width * out_height * 4; // cal rgba image size from w and h

    for (var i = 0; i < out_size; i += 4) {
        var irow = Math.floor((i / 4) / out_width);
        var icol = (i / 4) % out_width;

        var Y = in_data[in_offset0 + in_stride0 * irow + icol];
        var U = in_data[in_offset1 + in_stride1 * Math.floor(irow / 2) + Math.floor(icol / 2)]
        var V = in_data[in_offset2 + in_stride2 * Math.floor(irow / 2) + Math.floor(icol / 2)]

        var R = Y + (V - 128) * 1.4075;
        var G = Y - (U - 128) * 0.3455 - (V - 128) * 0.7169;
        var B = Y + (U - 128) * 1.779;
        //console.log (R,G,B);
        out_data[i + 0] = R;
        out_data[i + 1] = G;
        out_data[i + 2] = B;
        out_data[i + 3] = 255;
    }

    //console.log(data_in, data_out)
}

//out is rgba format
//in is yv12 format
function map_yv12_to_rgba(out_data, out_width, out_height,
    in_data, in_stride0, in_stride1, in_stride2, in_offset0, in_offset1, in_offset2) {

    var out_size = out_width * out_height * 4; // cal rgba image size from w and h

    for (var i = 0; i < out_size; i += 4) {
        var irow = Math.floor((i / 4) / out_width);
        var icol = (i / 4) % out_width;

        var Y = in_data[in_offset0 + in_stride0 * irow + icol];
        var V = in_data[in_offset1 + in_stride1 * Math.floor(irow / 2) + Math.floor(icol / 2)]
        var U = in_data[in_offset2 + in_stride2 * Math.floor(irow / 2) + Math.floor(icol / 2)]

        var R = Y + (V - 128) * 1.4075;
        var G = Y - (U - 128) * 0.3455 - (V - 128) * 0.7169;
        var B = Y + (U - 128) * 1.779;
        //console.log (R,G,B);
        out_data[i + 0] = R;
        out_data[i + 1] = G;
        out_data[i + 2] = B;
        out_data[i + 3] = 255;
    }

    //console.log(data_in, data_out)
}

//out is rgba format
//in is yuyv format
function map_yuyv_to_rgba(out_data, out_width, out_height,
    in_data, in_stride0, in_offset0) {

    var out_size = out_width * out_height * 4; // cal rgba image size from w and h

    for (var i = 0; i < out_size; i += 4) {
        var irow = Math.floor((i / 4) / out_width);
        var icol = (i / 4) % out_width;

        var Y = in_data[in_offset0 + in_stride0 * irow + icol * 2];
        var U = in_data[in_offset0 + in_stride0 * irow + Math.floor(icol / 2) * 4 + 1];
        var V = in_data[in_offset0 + in_stride0 * irow + Math.floor(icol / 2) * 4 + 3];

        var R = Y + (V - 128) * 1.4075;
        var G = Y - (U - 128) * 0.3455 - (V - 128) * 0.7169;
        var B = Y + (U - 128) * 1.779;
        //console.log (R,G,B);
        out_data[i + 0] = R;
        out_data[i + 1] = G;
        out_data[i + 2] = B;
        out_data[i + 3] = 255;
    }

    //console.log(data_in, data_out)
}

function trans_yv12_to_rgba(data_in, data_out, size_out, width, height, stride0, stride1, stride2, offset0, offset1, offset2) {
    for (var i = 0; i < size_out; i += 4) {
        var irow = Math.floor((i / 4) / width);
        var icol = (i / 4) % width;

        var Y = data_in[offset0 + stride0 * irow + icol];
        var V = data_in[offset1 + stride1 * Math.floor(irow / 2) + Math.floor(icol / 2)]
        var U = data_in[offset2 + stride2 * Math.floor(irow / 2) + Math.floor(icol / 2)]

        var R = Y + (V - 128) * 1.4075;
        var G = Y - (U - 128) * 0.3455 - (V - 128) * 0.7169;
        var B = Y + (U - 128) * 1.779;
        //console.log (R,G,B);
        data_out[i + 0] = R;
        data_out[i + 1] = G;
        data_out[i + 2] = B;
        data_out[i + 3] = 255;
    }

    console.log(data_in, data_out)
}

function trans_yuyv_to_rgba(data_in, data_out, size_out, width, height, stride0, offset0) {
    for (var i = 0; i < size_out; i += 4) {
        var irow = Math.floor((i / 4) / width);
        var icol = (i / 4) % width;

        var Y = data_in[offset0 + stride0 * irow + icol * 2];
        var U = data_in[offset0 + stride0 * irow + Math.floor(icol / 2) * 4 + 1]
        var V = data_in[offset0 + stride0 * irow + Math.floor(icol / 2) * 4 + 3]


        var R = Y + (V - 128) * 1.4075;
        var G = Y - (U - 128) * 0.3455 - (V - 128) * 0.7169;
        var B = Y + (U - 128) * 1.779;
        //console.log (R,G,B);
        data_out[i + 0] = R;
        data_out[i + 1] = G;
        data_out[i + 2] = B;
        data_out[i + 3] = 255;
    }

    console.log(data_in, data_out)
}

function trans_test(data_in, data_out) {
    for (var i = 0; i < 2; i++) {
        data_out[i] = data_in[i] - 100;
    }

}


window.onload = function() {

    var button = document.getElementById('id_submit');

    button.onclick = function() {
        var fileid = document.getElementById('avatar');

        var reader = new FileReader();
        reader.readAsArrayBuffer(fileid.files[0]);
        reader.onload = function() {
            console.log(this.result);

            var selformat = document.getElementById('format');
            var in_stride0 = parseInt(document.getElementById('in_stride0').value);
            var in_stride1 = parseInt(document.getElementById('in_stride1').value);
            var in_stride2 = parseInt(document.getElementById('in_stride2').value);
            var in_base = parseInt(document.getElementById('in_base').value);
            var in_offset0 = parseInt(document.getElementById('in_offset0').value);
            var in_offset1 = parseInt(document.getElementById('in_offset1').value);
            var in_offset2 = parseInt(document.getElementById('in_offset2').value);
            var out_width = parseInt(document.getElementById('out_width').value);
            var out_height = parseInt(document.getElementById('out_height').value);

            console.log("out_width  ", out_width);
            console.log("out_height ", out_height);

            console.log("in_stride0 ", in_stride0);
            console.log("in_stride1 ", in_stride1);
            console.log("in_stride2 ", in_stride2);
            console.log("in_base    ", in_base);

            console.log("in_offset0 ", in_offset0);
            console.log("in_offset1 ", in_offset1);
            console.log("in_offset2 ", in_offset2);
            console.log("in_base    ", in_base);
            console.log("out_width  ", out_width);
            console.log("out_height ", out_height);


            var canvas = document.getElementById('canvas');
            canvas.width = out_width;
            canvas.height = out_height;

            var buf = new Uint8Array(this.result);

            var ctx = canvas.getContext('2d');
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;



            if (selformat.value == "ARGB") {
                for (var i = 0; i < data.length; i++) {
                    data[i] = buf[i];
                }
            }
            if (selformat.value == "NV12") {
                trans_nv12_to_rgba(buf, data, data.length, canvas.width, canvas.height, canvas.width, canvas.width, 0, canvas.width * canvas.height);
            }
            if (selformat.value == "I420") {
                console.log("in_stride0", in_stride0);
                map_i420_to_rgba(data, out_width, out_height,
                    buf, in_stride0, in_stride1, in_stride2, in_base + in_offset0, in_base + in_offset1, in_base + in_offset2);
            }
            if (selformat.value == "YV12") {
                map_yv12_to_rgba(data, out_width, out_height,
                    buf, in_stride0, in_stride1, in_stride2, in_base + in_offset0, in_base + in_offset1, in_base + in_offset2);
            }
            if (selformat.value == "YUYV") {
                trans_yuyv_to_rgba(buf, data, data.length, canvas.width, canvas.height, canvas.width * 2, 0);
            }
            ctx.putImageData(imageData, 0, 0);
        }
    };
};