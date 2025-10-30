import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  headerRow: {
    flexDirection: 'row',
    borderTop: 1,
    borderLeft: 1,
    borderRight: 1,
    borderBottom: 1,
    borderColor: '#000',
  },
  logoCell: {
    width: '25%',
    borderRight: 1,
    borderColor: '#000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 80,
    height: 'auto',
    marginBottom: 4,
  },
  titleCell: {
    width: '50%',
    borderRight: 1,
    borderColor: '#000',
    paddingTop:4,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  pageNumberCell: {
    width: '25%',
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageIcon: {
    width: 16,
    height: 'auto',
    marginRight: 4,
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
  },
  logoStripes: {
    flexDirection: 'row',
    marginBottom: 4,
    gap: 2,
  },
  stripe: {
    width: 4,
    height: 16,
    backgroundColor: '#000',
    transform: 'skewX(-20deg)',
  },
  mainTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    marginTop:5
  },
  pageNumber: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
  },
  pageText: {
    fontSize: 9,
    marginTop: 4,
  },
  tableRow: {
    flexDirection: 'row',
    borderLeft: 1,
    borderRight: 1,
    borderBottom: 1,
    borderColor: '#000',
  },
  tableRowLast: {
    flexDirection: 'row',
    borderLeft: 1,
    borderRight: 1,
    borderBottom: 1,
    borderColor: '#000',
  },
  cell: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellBorderRight: {
    borderRight: 1,
    borderColor: '#000',
  },
  cellBorderRightBold: {
    borderRight: 1,
    borderColor: '#000',
  },
  label: {
    fontFamily: 'Helvetica',
    width: 95,
  },
  value: {
    fontFamily: 'Helvetica',
    flex: 1,
  },
  waterLabel: {
    fontFamily: 'Helvetica',
    width: 70,
  },
  checkMark: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  remarksCell: {
    width: '33.33%',
    padding: 6,
    flexDirection: 'column',
  },
  remarksLabel: {
    fontFamily: 'Helvetica',
    marginBottom: 4,
  },
  remarksContent: {
    fontFamily: 'Helvetica',
    minHeight: 12,
  },
  hyphen: {
    fontFamily: 'Helvetica',
  },
});

const BoreDMDocument = () => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          {/* Logo Cell */}
          <View style={{...styles.logoCell, paddingTop: 15, paddingBottom: 15}}>
            <Image 
              src="/image 1.png" 
              style={styles.logoImage}
            />
          </View>
          
          {/* Title Cell */}
          <View style={{...styles.titleCell,  paddingTop: 8, paddingBottom: 8}}>
            <Text style={styles.mainTitle}>Riverside Condominiums</Text>
            <Text style={styles.subtitle}>General Location - Project</Text>
          </View>
          
          {/* Page Number Cell */}
          <View style={{...styles.pageNumberCell, paddingTop: 8, paddingBottom: 8}}>
           
            <Text style={styles.pageNumber}>B-17</Text>
            <Text style={styles.pageText}>Page 1 of 1</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', borderLeft: 1, borderRight: 1, borderBottom: 1, borderColor: '#000'}}>
          <View style={{width: '66.66%', borderRight: 1, borderColor: '#000'}}>
            {/* Row 1 */}
            <View style={{flexDirection: 'row', borderBottom: 1, borderColor: '#000'}}>
              <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '50%'}}>
                <Text style={styles.label}>Drilling Firm:</Text>
                <Text style={styles.value}>BoreDM Drilling</Text>
              </View>
              <View style={{...styles.cell, width: '50%'}}>
                <Text style={styles.label}>Project No.:</Text>
                <Text style={styles.value}>25-3332</Text>
              </View>
            </View>

            {/* Row 2 */}
            <View style={{flexDirection: 'row', borderBottom: 1, borderColor: '#000'}}>
              <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '50%'}}>
                <Text style={styles.label}>Driller:</Text>
                <Text style={styles.value}>PA</Text>
              </View>
              <View style={{...styles.cell, width: '50%'}}>
                <Text style={styles.label}>Date Drilled:</Text>
                <Text style={styles.value}>03/05/2025</Text>
              </View>
            </View>

            {/* Row 3 */}
            <View style={{flexDirection: 'row', borderBottom: 1, borderColor: '#000'}}>
              <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '50%'}}>
                <Text style={styles.label}>Logged By:</Text>
                <Text style={styles.value}>LA</Text>
              </View>
              <View style={{...styles.cell, width: '50%'}}>
                <Text style={styles.label}>Boring Depth:</Text>
                <Text style={styles.value}>-</Text>
              </View>
            </View>

            {/* Row 4 */}
            <View style={{flexDirection: 'row'}}>
              <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '50%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: 95}}>
                  <Image 
                    src="/image 2.png" 
                    style={styles.pageIcon}
                  />
                  <Text style={styles.waterLabel}>Water :</Text>
                </View>
                <Text style={styles.value}>N/A</Text>
              </View>
              <View style={{...styles.cell, width: '50%'}}>
                <Text style={styles.label}>Boring Elevation:</Text>
                <Text style={styles.value}>N/A</Text>
              </View>
            </View>
          </View>

          {/* Right side - Remarks column spanning rows 1-4 only */}
          <View style={{...styles.remarksCell, width: '33.33%'}}>
            <Text style={styles.remarksLabel}>Remarks:</Text>
            <Text style={styles.remarksContent}>-</Text>
          </View>
        </View>

        {/* Row 5 - Last Row (full width, no remarks) */}
        <View style={styles.tableRowLast}>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Hammer Type:</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={{...styles.cell, width: '66.66%'}}>
            <Text style={styles.label}>Brand Address:</Text>
            <Text style={styles.value}>4909 N. 44th St, Phoenix, AZ 85018</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default BoreDMDocument;
