class AssignLabware {
  constructor(vol_per_multiplier, multiplier, single_or_multi){
    this.vol_per_multiplier = vol_per_multiplier;
    this.multiplier = multiplier;
    this.single_or_multi = single_or_multi;
    // this.vol = Number(vol_per_multiplier)*Number(multiplier)
  }
}
// console.log(liquid_vol)
// var liquid1 = new AssignLabware(100, 40, 'Multi');

function Find_labware(liquid){
  let vol = liquid.vol_per_multiplier*liquid.multiplier/1000;
  // return(vol)
  let single_or_multi = liquid.single_or_multi;
  let vol_notation = (vol > 0.5) ? vol : vol*1000
  let vol_string = vol_notation + ((vol > 0.5) ? 'mL' : 'ul')
  let left_paren = '('
  let right_paren = ')'

  let well_ceiling_res = 14
  let well_ceiling_195mL = 185
  let well_ceiling_falcon = 45
  let well_ceiling_15mL = 13
  let well_ceiling_1500ul = 1.2
  let well_ceiling_2000ul = 1.7

  if (liquid.single_or_multi == 'Multi') {   // MULTI-CHANNEL ACCESS
    if (vol > 4 && vol < 185){
      let num_wells = Math.ceil(vol/well_ceiling_res);
      if (vol > 50){
        return([' Nest 12 Well Reservoir ' +  left_paren + num_wells + ' wells' + right_paren +
               ', or Nest 1 Well Reservior ', vol_string])
      }
      else {
        return([' Nest 12 Well Reservoir ' + left_paren + num_wells + ' wells' + right_paren , vol_string]);
      }

    }
    else if (vol >= 50){
      let labware_count = Math.ceil(vol/well_ceiling_195mL);
      return([labware_count + ' Nest 1 Well Reservoirs', vol_string] );
    }
    else if (vol <= 4) {
      return(['Well plate' , vol_string]);
    }
  }

  if (liquid.single_or_multi == 'Single'){               // SINGLE-CHANNEL ACCESS
    let num_well_res_12 = Math.ceil(vol/well_ceiling_res);
    let num_tubes_falcon = Math.ceil(vol/well_ceiling_falcon);
    let num_tubes_15mL = Math.ceil(vol/well_ceiling_15mL);

    let nest_12_string = ' Nest 12 Well Reservoir' + left_paren + num_well_res_12 + ' wells' + right_paren
    let nest_1_string = ', Nest 1 Well Reservior'
    let falcon_50_string = ', Falcon 50mL tubes ' + left_paren + num_tubes_falcon + ' tubes ' + right_paren
    let tube_15mL_string = ', or 15mL tubes ' + left_paren + num_tubes_15mL + ' tubes' + right_paren

    if (vol > 10 && vol < 185){
      if (vol > 50){
        return([nest_12_string + nest_1_string + falcon_50_string + tube_15mL_string , vol_string])
      }
      else {
        return([nest_12_string + falcon_50_string + tube_15mL_string, vol_string])
      }

    }
    else if (vol <= 10){

      let num_tubes_1500ul = Math.ceil(vol/well_ceiling_1500ul);
      let num_tubes_2000ul = Math.ceil(vol/well_ceiling_2000ul);

      let tube_1500ul_string = left_paren + num_tubes_1500ul + right_paren + ' 1.5mL tubes'
      let tube_2000ul_string = ', or ' + left_paren + num_tubes_2000ul + right_paren + ' 2mL tubes'

      return([tube_1500ul_string + tube_2000ul_string , vol_string]);
    }
    else{
      let labware_count = Math.ceil(vol/well_ceiling_195mL);
      return([left_paren + labware_count + right_paren + ' Nest 1 Well Reservior(s)', vol_string])
    }
  }
}
// console.log(find_labware(liquid1.vol));

// module.exports = {find_labware}
export default Find_labware;
